<?php

namespace TheUnraveler\UjsBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;

class FormController
{
    protected $csrf, $templating;

    public function __construct($csrf, EngineInterface $templating)
    {
        $this->csrf = $csrf;
        $this->templating = $templating;
    }

    /**
     * Generates a new form for the given action and method.
     *
     * @param string $action
     *   The URL the form will submit to.
     * @param string $method
     *   The HTTP method to use for the form.
     * 
     * @return Symfony\Component\HttpFoundation\Response
     *   A response containing the rendered HTML form.
     */
    public function generateAction($action, $method, Request $request)
    {
        $action = urldecode($action);
        $token = $this->csrf->generateCsrfToken('ujs');
        return $this->templating->renderResponse('UjsBundle:Form:form.html.twig', compact('action', 'method', 'token'));
    }
}
