## Taller - Servicios, Repositorios y Pruebas

### Declaracion de uso de IA
Use IA como apoyo para sintaxis de NestJS/TypeORM, Jest, errores sobre todo y para buscar algunas cosas. La implementacion de reglas, endpoints y pruebas la realice y verifique yo.

### Preguntas de cierre
1. Por que OrderPriorityService no necesita repository? Porque es regla pura calculada, recibe OrderEntity y devuelve priority/message, no consulta PostgreSQL.
2. Que responsabilidad tiene OrdersService al consultar prioridad? Buscar con findOne (conserva 404) y delegar a classify, luego armar respuesta con orderId/status/quantity/priority/message.
3. Diferencia totalPending vs showing? totalPending es total real con countBy, showing es cuantos devuelve (orders.length, max 5).
4. Por que pruebas sin PostgreSQL? Por que prueban logica aislada con new OrderPriorityService() y objetos mock, sin controller/repository/DB.
5. Problema si prioridad se calcula en controller? Mezcla HTTP con negocio, no reutilizable, no testeable, duplica logica.