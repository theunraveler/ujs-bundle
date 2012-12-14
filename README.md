UjsBundle for Symfony 2
=======================

Description.

Dependencies
------------

* Symfony
* jQuery

Installation
------------

Install just like any other Symfony bundle. See the section below on security
for further instructions.

After installing, you will need to run `app/console assets:install` or add
`@UjsBundle/Resources/public/js/ujs.js` if you are using Assetic.

Usage
-----

For any link that you would like to submit with an HTTP method other than GET,
just include a `data-method` attribute, like so:

    <a href="/posts/15" data-method="DELETE">Delete this post</a>

You may optionally include a `data-confirm` attribute, which will be used as
the text in the JavaScript confirm dialog.

    <a href="/posts/15" data-method="DELETE" data-confirm="Are you sure you
    want to delete this post?">Delete this post</a>

Security
--------

**Important!! If you do not implement these steps, your app will be vulnerable
to cross-site scripting attacks!**

First, you will need to include an HTML `<meta>` tag on any page that yo would
like to use UJS. For example, add the following to your `<head>` section:

    <meta name="_ujs_csrf_token" content="{{ csrf_token('ujs') }}" />
    <meta name="_ujs_csrf_token_name" content="_ujs_csrf_token" />

Any controller action that you would like to submit with UJS should check the CSRF token to make sure it is valid, like so:

    public function deleteAction(Request $request)
    {
        if ($request->request->has('_ujs_csrf_token') && $this->get('form.csrf_provider')->isCsrfTokenValid('ujs', $request->request->get('_ujs_csrf_token'))) {
            // Do your deleting, posting, etc.
        }
    }
