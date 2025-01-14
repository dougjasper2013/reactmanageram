<?php
// login.php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(['success' => false, 'message' => 'Email and password are required.']);
    exit;
}

$email = $data->email;
$password = $data->password;

// Find user in the database
$query = "SELECT * FROM users WHERE email = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$email]);

$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid email or password.']);
    exit;
}

// If credentials are correct
echo json_encode(['success' => true]);
