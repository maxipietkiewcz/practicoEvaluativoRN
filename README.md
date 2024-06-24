# React Mini-Project

## Descripción

Este proyecto es una aplicación sencilla de React que implementa un contador y permite cambiar entre temas claro y oscuro usando los hooks `useState`, `useEffect`, y `useContext`.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/maxipietkiewcz/practicoEvaluativoRN.git
   ```

2. Navega al directorio `react-mini-project`

```
cd react-mini-project
```

3. Instala las dependencias

```
npm install
```

4. Inicia la aplicación

```
npm start
```

### Hooks Utilizados

1. useState

- Utilizado en ThemeContext.js para manejar el estado del tema (claro/oscuro).
- Utilizado en Counter.js para manejar el estado del contador.

2. useEffect

- Utilizado en Counter.js para actualizar el título del documento cada vez que cambia el contador.
  useContext
- Utilizado en ThemeToggle.js y App.js para acceder al contexto del tema y cambiarlo.

##### Adaptabilidad

- Este proyecto está estructurado de manera modular, lo que facilita la adición de nuevos componentes y la expansión de funcionalidades. Puedes agregar más contextos, hooks y componentes según sea necesario.

### Ejecución del Proyecto

Para ejecutar el proyecto, sigue los pasos en el archivo `README.md`. Este proyecto puede ser la base para desarrollos más complejos, integrando más estados y lógica según las necesidades del proyecto.
