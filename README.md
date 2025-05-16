# MiAppDemostracion

Este proyecto es una demostración académica sobre el uso de rutas y módulos en Angular. El objetivo principal es mostrar cómo estructurar una aplicación Angular utilizando módulos separados y rutas para navegar entre diferentes componentes.

## Temática principal

- **Rutas (Routing):** El proyecto implementa rutas para navegar entre diferentes vistas, como Home, Formulario y Tabla, utilizando el sistema de enrutamiento de Angular.
- **Módulos:** Cada sección principal de la aplicación (Home, Formulario, Tabla) está organizada en su propio módulo, lo que facilita la escalabilidad y el mantenimiento del código.
- **Componentes:** Se utilizan componentes para representar cada vista o funcionalidad principal.

## Desarrollo y pruebas

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.10.

### Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Luego abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos fuente.

### Generación de código

Angular CLI incluye herramientas para generar código. Por ejemplo, para crear un nuevo componente:

```bash
ng generate component component-name
```

Para ver todos los esquemas disponibles (componentes, directivas, pipes, etc.):

```bash
ng generate --help
```

### Compilación

Para compilar el proyecto:

```bash
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`.

### Pruebas unitarias

Para ejecutar pruebas unitarias con [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Pruebas end-to-end

Para pruebas end-to-end (e2e):

```bash
ng e2e
```

## Recursos adicionales

Para más información sobre Angular CLI y el sistema de rutas y módulos, consulta la [documentación oficial de Angular](https://angular.dev/tools/cli).
