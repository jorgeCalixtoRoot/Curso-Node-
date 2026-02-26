# Clase 1 - Fundamentos de Node.js

En esta clase hemos visto los conceptos base para empezar con Node.js:

- Módulos en **CommonJS** y **ES Modules**.
- Uso de módulos nativos como `node:os` y `node:fs`.
- Concepto de `globalThis` como acceso global estándar.
- Modelo de ejecución de Node.js (monohilo, síncrono y asíncrono por eventos).

---

## Estructura actual

- `cjs/index.js`: importa `sum` con `require` y ejecuta una suma.
- `cjs/sum.js`: exporta la función `sum` con `module.exports`.
- `mjs/index.mjs`: importa `sum`, `rest` y `mult` con `import`.
- `mjs/sum.mjs`: exporta funciones con `export`.
- `infoOS.js`: muestra información del sistema operativo con `node:os`.
- `fileSystemStat.js`: ejemplo de metadata con `fs.statSync` (síncrono).
- `fileSystemRead.js`: lectura de archivos en modo síncrono y asíncrono.
- `archivo.txt` y `archivo2.txt`: archivos usados para pruebas de sistema de archivos.
- `globalThis.md`: explicación teórica de `globalThis`.

---

## Cómo ejecutar

### 1) Ejemplo CommonJS

```bash
node cjs/index.js
```

Salida esperada:

```text
3
```

### 2) Ejemplo ES Modules

```bash
node mjs/index.mjs
```

Salida esperada:

```text
3
-1
2
```

### 3) Información del sistema operativo

```bash
node infoOS.js
```

Muestra plataforma, versión, arquitectura, CPUs y memoria.

### 4) Sistema de archivos: `stat` (sincrónico)

```bash
node fileSystemStat.js
```

Actualmente obtiene el `stat` de `archivo.txt` usando `fs.statSync`.

### 5) Sistema de archivos: lectura síncrona y asíncrona

```bash
node fileSystemRead.js
```

Este ejemplo muestra:

- `readFileSync` (bloqueante, síncrono).
- `readFile` con callback (no bloqueante, asíncrono).
- Cómo Node sigue ejecutando código mientras termina la lectura asíncrona.

---

## Node.js: monohilo, síncrono y asíncrono (eventos)

### ¿Node es monohilo?

Sí. El código JavaScript de tu aplicación se ejecuta en **un hilo principal**.

### Parte síncrona

- Se ejecuta línea por línea y bloquea el hilo hasta terminar.
- Ejemplo de esta clase: `fs.statSync('./archivo.txt')`.
- Ventaja: simple de entender.
- Desventaja: puede frenar la app si una tarea tarda mucho.

### Parte asíncrona

- Node delega tareas de I/O (archivo, red, timers, etc.) a APIs del sistema/libuv.
- Cuando esas tareas terminan, sus callbacks/promesas se encolan para ejecutarse en el hilo principal.
- Esto permite atender muchas operaciones sin bloquear el flujo principal de JS.

### Event Loop (eventos)

El **Event Loop** es el mecanismo que revisa colas de eventos y va ejecutando callbacks pendientes.

Flujo simplificado:

1. Corre el código síncrono.
2. Registra operaciones asíncronas (`setTimeout`, I/O, promesas, etc.).
3. Al completarse, sus eventos entran en cola.
4. El Event Loop procesa esas colas y ejecuta callbacks uno por uno.

Idea clave: Node puede manejar concurrencia por eventos aunque JavaScript se ejecute en un solo hilo principal.

---

## Notas rápidas

- En Node.js, `.js` usa CommonJS por defecto (salvo configuración de `type: "module"`).
- `.mjs` fuerza ES Modules.
- Usar prefijo `node:` en módulos nativos (`node:os`, `node:fs`) es una buena práctica actual.
