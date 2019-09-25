# 'src/containers' (pages)

> Similar to _Containers_ they hold the data and control the flow of the same.
> Pages can have only Templates(generally just one).

Pages are the final representation
Pages are specific instances of templates that show what a UI looks like with real representative content in place.[Example](http://atomicdesign.bradfrost.com/images/content/page.png)

_Pages also provide a place to articulate variations in templates, which is crucial for establishing robust and reliant design systems._ Here are just a few examples of template variations:

- A user has one item in their shopping cart and another user has ten items in their cart.
- A web app’s dashboard typically shows recent activity, but that section is suppressed for first-time users.
- One article headline might be 40 characters long, while another article headline might be 340 characters long.
- Users with administrative privileges might see additional buttons and options on their dashboard compared to users who aren’t admins.
- In all of these examples, the underlying templates are the same, but the user interfaces change to reflect the dynamic nature of the content. These variations directly influence how the underlying molecules, organisms, and templates are constructed. Therefore, creating pages that account for these variations helps us create more resilient design systems.

For more details [Click here](http://atomicdesign.bradfrost.com/chapter-2/#pages)
