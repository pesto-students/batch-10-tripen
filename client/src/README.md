# 'src'

This folder will contain all components and other source files that would be used in our application.
Its majorly divided into 5 parts:-

- atoms (HTML elements) [Elements]
- molecules (Group of HTML elements) [Components]
- organisms (Group of molecules and/or HTML elements) [Components]
- templates (Group of organisms and Molecules without any props or Data) [Views]
- pages (Templates with Data) [Containers]

- Atoms are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.
- Molecules are collections of atoms that form relatively simple UI components.
- Organisms are relatively complex components that form discrete sections of an interface.
- Templates place components within a layout and demonstrate the design’s underlying content structure.
- Pages apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.

Why Molecules and Organisms are put together?
Because it was confusing to differentiate between Molecules and Organisms, so we stopped differentiating between them and clubbed them together.

Read the full book [Atomic Design by Brad Frost](http://atomicdesign.bradfrost.com/).
Example of Atomic Design:- http://atomicdesign.bradfrost.com/images/content/instagram-atomic.png
[Click here](https://miro.medium.com/max/1331/0*BBNnpHeIAAfmVcX_.gif) to get a quick peek into Atomic Design.
Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.
