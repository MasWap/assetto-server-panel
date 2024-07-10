<?php

// src/Controller/ProductController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/product/{id}', name: 'product')]
    public function show($id): Response
    {
        // Exemple : charger les données du produit depuis une base de données
        $product = [
            'id' => $id,
            'name' => 'Nom du Produit',
            'description' => 'Description du produit ici.',
            'price' => 19.99,
        ];

        return $this->render('product/show.html.twig', [
            'product' => $product,
        ]);
    }
}
