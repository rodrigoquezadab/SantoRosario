// =====================================================================
// LETRAS DE LOS CANTOS (compartidas por todos los que usan la app)
//
// Las letras no vienen incluidas porque son obras con derechos de autor.
// Si tu comunidad tiene permiso para usarlas (por ejemplo, del folleto del
// Mes de María), pégalas aquí. La clave debe ser el título exacto del canto,
// tal como aparece en la lista de Cantos. Usa comillas invertidas (`) para
// que se respeten los saltos de línea; deja una línea en blanco entre estrofas.
//
// Ejemplo:
//   "Santa María del Camino": `Primera línea de la estrofa
//   segunda línea…
//
//   Estribillo…`,
//
// Cada persona también puede guardar letras solo en su teléfono desde la
// pestaña «Cantos» (botón «Agregar letra»); esas tienen prioridad sobre este archivo.
// =====================================================================

const MM_LETRAS = {
};

// ---- INICIO TEXTO DE PRUEBA (borrar todo este bloque cuando se agreguen las letras reales) ----
(() => {
    const prueba = `[Texto de prueba: aquí irá la letra real]

Primera estrofa, primera línea,
segunda línea de la estrofa,
tercera línea que continúa
y cuarta línea para cerrar.

Estribillo: se repite aquí,
con dos o tres líneas cortas,
estribillo: se repite aquí.

Segunda estrofa, primera línea,
segunda línea un poco más larga que las demás,
tercera línea de la estrofa
y última línea antes del estribillo.

Estribillo: se repite aquí,
con dos o tres líneas cortas,
estribillo: se repite aquí.`;
    MM_CANTOS.forEach(c => { if (!MM_LETRAS[c.titulo]) MM_LETRAS[c.titulo] = prueba; });
})();
// ---- FIN TEXTO DE PRUEBA ----
