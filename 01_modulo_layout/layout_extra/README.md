# Master Front End XIV - Módulo 1 - Layout - Extra

## Laboratorio EXTRA

Este laboratorio es EXTRA, y por tanto opcional, pero nuestro consejo es que los cubras todos.

![Imagen que muestra cómo debe lucir la web a crear en este ejercicio extra](image.png)

### Introducción

Vamos a crear un Layout para una aplicación, que contendrá:

- Header
- Toolbar con un input de texto para búsquedas y nombre del usuario logado
- Barra con el nombre de la aplicación
- Nav
- Menú con varias opciones de navegación
- Main
- Contenido con la información principal de la aplicación
- Fondo diferente de blanco
- Footer
- Texto de la compañía, al final de la página (aunque el contenido no ocupe todo el alto)

### Diseño Desktop (a partir de 768px)

![Diseño de la página a más de 768px de ancho](design_rel_mayor.png)

Comportamiento de la web

![Comportamiento de la página a más de 768px de ancho](comportamiento_rel_mayor.png)

### Diseño Mobile/Tablet (hasta 768px de ancho)

![Diseño y comportamiento de la página hasta 768px de ancho](comportamiento_rel_menor.png)

### Consideraciones

- No perder en ninguna resolución la barra de navegación al hacer scroll
- En resoluciones pequeñas (hasta 768px de ancho):
  - Contenido a ocultar:
    - Barra superior con input de búsqueda y nombre de usuario
    - Título del menú
  - Cambiar menú a la parte superior, bajo el header
  - Cambiar la organización del contenido principal para visualizarlo sin problema sin problemas

## Visualización

Si se desea visualizar este ejercicio, descargarse/clonarse la carpeta **layout_extra** y ejecutar los siguientes comandos (previa instalación de [Node.js](https://nodejs.org/es/download/)):

```bash
$ npm install
```

```bash
$ npx parcel src/index.html
```
