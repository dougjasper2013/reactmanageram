<?php
// register.php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(['success' => false, 'message' => 'Email and password are required.']);
    exit;
}

$email = $data->email;
$password = password_hash($data->password, PASSWORD_BCRYPT); // Hash the password

// Check if email already exists
$query = "SELECT * FROM users WHERE email = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$email]);

if ($stmt->rowCount() > 0) {
    echo json_encode(['success' => false, 'message' => 'Email is already taken.']);
    exit;
}

// Insert new user into database
$query = "INSERT INTO users (email, password) VALUES (?, ?)";
$stmt = $pdo->prepare($query);
$stmt->execute([$email, $password]);

echo json_encode(['success' => true]);
