# Maxi Pet en Next.js

![MaxiPet Logo](public/maxipet-logo.png)

Este repositorio es un clon a la lading page legacy de Maxi Pet 🐾, si quiere hacer una prueba puedes dirigirte a este [link](https://maxi-pet-next-js.vercel.app/).

## Contenido

Este proyecto tiene incluido y configurado las siguientes dependencias en base al [template de Avila Tek](https://github.com/avila-Tek/next-template):

1. [Next.js](https://nextjs.org/)
2. [Tailwind css](https://tailwindcss.com/)
3. [Eslint](https://eslint.org/)
4. [Typescript](https://typescriptlang.org/)
5. [NProgress](https://ricostacruz.com/nprogress/)
6. [Sentry](https://sentry.io/)
7. [Cypress](https://www.cypress.io/)
8. [MUI](https://mui.com/)

## Ver página

Si quieres ver la página puedes dirigirte a este [link](https://maxi-pet-next-js.vercel.app/). Tambien puedes clonar este repositorio

```bash
git clone https://github.com/josedipietro/MaxiPet-Next.js <folder_name>
```

En donde se debe cambiar `<folder_name>` por el nombre de la carpeta a utilizar.

Una vez configurado git deberás instalar las dependencias e iniciar el servidor de desarrollo, para ellos deberás hacer

```bash
npm install
npm run dev
```

Luego abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la página en local (si no carga la página puedes verificar el puerto en la terminal)

### Configurar Sentry

Para configurar Sentry deberas inciar sesion para obtener un token de sentry y como referencia puedes leer el ejemplo de [next.js](https://github.com/vercel/next.js/tree/canary/examples/with-sentry)

## Pruebas E2E

El proyecto cuenta con 2 pruebas E2E, para ejecutarlas deberas ejecutar el siguiente comando de [Cypress](https://www.cypress.io/) mientras se ejecuta el proyecto en simultaneo en otra terminal

```bash
npm run dev
npm run cypress
```

Luego seleccionas `E2E Testing` y el navegador de tu preferencia para ejecutar las pruebas.

## Changelog

Puedes revisar el changelog [aquí](/CHANGELOG.md)

## Licencia

Este proyecto se encuentra bajo la licencia de MIT

## Saber mas

Para conocer mas sobre Next.js, puedes observar los siguientes links:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre los features y la API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

## Autores

1. [Jose R. Quevedo](https://github.com/zoomelectrico)
2. [Jose Di Pietro](https://github.com/josedipietro)
