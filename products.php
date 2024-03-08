<?php

// Sample products data
$products = [
    [
        "title" => "Product 1",
        "image" => "product1.jpg",
        "description" => "Description of product 1",
        "price" => 20.99,
        "affiliateLink" => "https://www.amazon.com/product1-affiliate-link"
    ],
    [
        "title" => "Product 2",
        "image" => "product2.jpg",
        "description" => "Description of product 2",
        "price" => 30.49,
        "affiliateLink" => "https://www.amazon.com/product2-affiliate-link"
    ],
    // Add more products as needed
];

// Output products as JSON
header('Content-Type: application/json');
echo json_encode($products);
