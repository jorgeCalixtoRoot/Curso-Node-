# Entendiendo `globalThis` en JavaScript

`globalThis` es una propiedad estándar que proporciona una forma única de acceder al objeto global, independientemente del entorno en el que se esté ejecutando el código (ya sea servidor o cliente).

---

## ¿Qué es?
**`globalThis`** es una variable global en toda la aplicación. Su propósito es estandarizar el acceso al objeto global sin tener que detectar manualmente en qué entorno estamos.

**En una frase:** un nombre único para el objeto global en cualquier entorno.

### Mapeo por Entorno

| Entorno | Variable global tradicional |
| :--- | :--- |
| **Node.js** | `global` |
| **Navegador** | `window` |

---

## Representación Visual


```text
globalThis
    ├─ nodejs → global
    └─ navegador → window
```

---

## Ejemplo rápido

```js
globalThis.console.log("Hola desde globalThis");
```