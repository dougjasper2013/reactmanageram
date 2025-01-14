<?php
// contacts.php
header('Content-Type: application/json');
require 'db.php';

if (!isset($_GET['user'])) {
    echo json_encode(['success' => false, 'message' => 'User is required.']);
    exit;
}

$user = $_GET['user'];

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

// Get contacts for the logged-in user
$query = "SELECT * FROM contacts WHERE user_id = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$userId]);

$contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['contacts' => $contacts]);
