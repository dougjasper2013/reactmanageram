<?php
// add_contact.php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->user) || !isset($data->name) || !isset($data->email)) {
    echo json_encode(['success' => false, 'message' => 'User, name, and email are required.']);
    exit;
}

$user = $data->user;
$name = $data->name;
$email = $data->email;

// Get user ID based on email
$query = "SELECT id FROM users WHERE email = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$user]);

$userData = $stmt->fetch();

if (!$userData) {
    echo json_encode(['success' => false, 'message' => 'User not found.']);
    exit;
}

$userId = $userData['id'];

// Insert new contact into the contacts table
$query = "INSERT INTO contacts (user_id, name, email) VALUES (?, ?, ?)";
$stmt = $pdo->prepare($query);
$stmt->execute([$userId, $name, $email]);

echo json_encode(['success' => true]);
