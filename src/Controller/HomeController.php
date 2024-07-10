<?php

// src/Controller/HomeController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        // Exemple : récupérer une liste de produits (peut provenir de la base de données)
        $products = [
            [
                'id' => 1,
                'name' => 'Produit 1',
                'description' => 'Description du produit 1.',
                'price' => 19.99,
                'image' => 'product1.jpg',
            ],
            [
                'id' => 2,
                'name' => 'Produit 2',
                'description' => 'Description du produit 2.',
                'price' => 29.99,
                'image' => 'product2.jpg',
            ],
            // Ajoutez plus de produits si nécessaire
        ];

        return $this->render('home/index.html.twig', [
            'products' => $products,
        ]);
    }
}
