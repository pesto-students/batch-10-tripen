# 'src/components'

## 'molecules'

> Molecules are combination of atoms & molecules only.
> Molecules are simply combinations of basic HTML elements and other molecules.
> Try not to have stateful components as molecules, or limit it to <2 states.

The molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a [search form molecule](http://atomicdesign.bradfrost.com/images/content/molecule-search-form.png).

Creating molecules helps UI designers and developers to adhere to _Single responsibility Principle_.

**The result is a simple, portable, reusable component that can be dropped in anywhere**

For more details [Click here](http://atomicdesign.bradfrost.com/chapter-2/#molecules)

## 'organisms'

> Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms.
> **These organisms form distinct sections of an interface.**

For Example : The [header](http://atomicdesign.bradfrost.com/images/content/organism-header.png) forms a standalone section of an interface, even though it contains several smaller pieces of interface with their own unique properties and functionality.

An Organism can have same molecule repeated over and over again (Example)[http://atomicdesign.bradfrost.com/images/content/organisms-product-grid.png].

Difference between molecules and organisms:

- Molecules are relatively simple
  Organisms are complex.

- Molecules .
  Organism forms a standalone section of an interface.

- General rule of thumb is that if you break a component down and get

  - basic _tags_ (such as an image, heading, paragraph, button, etc), it’s a molecule.
  - smaller _components_ (social share lists, cards, media object, etc) it’s an organism.

- Molecules are more like _helpers_  
  Organisms are more like _standalone Components_

[**Standalone**](https://ugc-about.futurelearn.com/wp-content/uploads/04_small.jpg) - The “standalone” elements can “survive” on their own – they can be viewed as their own self-contained units of content and functionality. e.g- Jumbotron Container, Call to action Container, Header Section, Footer Section
[**helper**](https://ugc-about.futurelearn.com/wp-content/uploads/03_small.jpg) - Helpers don’t make sense on their own. e.g. - Card Description, Like and comments section, Share section.

To have a clearer picture on what the difference is [Click Here](https://about.futurelearn.com/blog/atomic-design-molecules-organisms)

For more details [Click here](http://atomicdesign.bradfrost.com/chapter-2/#organisms)
