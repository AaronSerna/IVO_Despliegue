import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-formulario',
  templateUrl: './componente-formulario.component.html',
  styleUrls: ['./componente-formulario.component.css']
})
export class ComponenteFormularioComponent {
  paciente = {
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    numeroTelefono: '',
    dni: '',
    sexo: '',
    provincia: '',
    codigoPostal: '',
    numero: '',
    puerta: '',
    poblacion: '',
    direccion: '',
    piso: '',
    escalera: ''
  };

  poblacion: any = {
    poblacion: '',
    poblaciones: [] as string[]
  };
  
  
  provinciasPoblaciones = [
    { provincia: 'Álava', poblaciones: ['Vitoria', 'Mondragón', 'Amurrio', 'Llodio', 'Salvatierra', 'Agurain', 'Laudio/Llodio', 'Oyón-Oion', 'Aiara', 'Elciego', 'Labastida', 'Laguardia', 'Lapuebla de Labarca', 'Laudio', 'Leza', 'Moreda de Álava'] },
    { provincia: 'Albacete', poblaciones: ['Albacete', 'Hellín', 'Villarrobledo', 'Almansa', 'La Roda', 'Tobarra', 'Caudete', 'Casas-Ibáñez', 'Madrigueras', 'Balazote', 'Elche de la Sierra', 'Aýna', 'Chinchilla de Monte-Aragón', 'Tarazona de la Mancha', 'Fuente-Álamo'] },
    { provincia: 'Almería', poblaciones: ['Almería', 'Roquetas de Mar', 'El Ejido', 'Níjar', 'Vícar', 'Huércal-Overa', 'Adra', 'Huércal de Almería', 'Berja', 'Dalías', 'Cuevas del Almanzora', 'Ejido', 'Vera', 'Cuevas de Almanzora', 'Pulpí', 'Carboneras'] },
    { provincia: 'Asturias', poblaciones: ['Oviedo', 'Gijón', 'Avilés', 'Siero', 'Langreo', 'Mieres', 'Castrillón', 'San Martín del Rey Aurelio', 'Corvera de Asturias', 'Oviedo', 'Gijón', 'Avilés', 'Siero', 'Langreo', 'Mieres', 'Castrillón', 'San Martín del Rey Aurelio', 'Corvera de Asturias', 'Llanera', 'Cangas del Narcea', 'Valdés', 'Villaviciosa', 'Laviana', 'Llanes', 'Gozón', 'Parres', 'Gozón', 'Parres', 'Navia', 'Vegadeo', 'Luarca'] },
    { provincia: 'Ávila', poblaciones: ['Ávila', 'Arévalo', 'Candeleda', 'El Tiemblo', 'Las Navas del Marqués', 'Sotillo de la Adrada', 'Cebreros', 'Arenas de San Pedro', 'Burgohondo', 'Crespos', 'Barraco', 'El Barraco', 'Hoyos del Espino', 'La Adrada', 'Mombeltrán', 'Piedralaves', 'San Juan de la Nava', 'San Pedro del Arroyo', 'Santa María del Tiétar', 'Solosancho'] },
    { provincia: 'Alicante', poblaciones: ['Alicante', 'Elche', 'Benidorm', 'Alcoy', 'Denia', 'Jávea', 'Villajoyosa', 'Torrevieja', 'Orihuela', 'Santa Pola', 'Calpe', 'Elda', 'San Vicente del Raspeig', 'Benissa', 'Ibi'] },
    { provincia: 'Barcelona', poblaciones: ['Barcelona', 'Badalona', 'Sabadell', 'Terrassa', 'Hospitalet de Llobregat', 'Santa Coloma de Gramenet', 'Mataró', 'Cornellà de Llobregat', 'Sant Cugat del Vallès', 'Manresa', 'Rubí', 'Viladecans', 'Castelldefels', 'Granollers', 'Sant Boi de Llobregat'] },
    { provincia: 'Badajoz', poblaciones: ['Badajoz', 'Mérida', 'Don Benito', 'Almendralejo', 'Villanueva de la Serena', 'Zafra', 'Montijo', 'Olivenza', 'Jerez de los Caballeros', 'Villafranca de los Barros', 'Alburquerque', 'Miajadas', 'Castuera', 'Llerena', 'Fuente de Cantos', 'Azúaga', 'Talarrubias', 'Zalamea de la Serena', 'Burguillos del Cerro', 'Fregenal de la Sierra'] },
    { provincia: 'Burgos', poblaciones: ['Burgos', 'Miranda de Ebro', 'Aranda de Duero', 'Briviesca', 'Lerma', 'Villarcayo de Merindad de Castilla la Vieja', 'Medina de Pomar', 'Belorado', 'Villadiego', 'Salas de los Infantes', 'Gamonal', 'Espinosa de los Monteros', 'Villasana de Mena', 'Roales de Campos', 'Monasterio de Rodilla', 'Arlanzón', 'La Aguilera', 'Arandilla', 'Sotopalacios', 'Trespaderne'] },
    { provincia: 'Cáceres', poblaciones: ['Cáceres', 'Plasencia', 'Navalmoral de la Mata', 'Miajadas', 'Trujillo', 'Coria', 'Talayuela', 'Jaraíz de la Vera', 'Montehermoso', 'Malpartida de Plasencia', 'Guadalupe', 'Casar de Cáceres', 'Valencia de Alcántara', 'Jarandilla de la Vera', 'Moraleja', 'Alcántara', 'Brozas', 'Tornavacas', 'Aldeanueva de la Vera', 'Valverde de la Vera'] },
    { provincia: 'Cádiz', poblaciones: ['Cádiz', 'Jerez de la Frontera', 'Algeciras', 'Chiclana de la Frontera', 'San Fernando', 'El Puerto de Santa María', 'La Línea de la Concepción', 'Sanlúcar de Barrameda', 'Rota', 'Puerto Real', 'Arcos de la Frontera', 'Conil de la Frontera', 'Chipiona', 'Tarifa', 'Ubrique', 'Jimena de la Frontera', 'Vejer de la Frontera', 'Barbate', 'Medina-Sidonia', 'Los Barrios'] },
    { provincia: 'Cantabria', poblaciones: ['Santander', 'Torrelavega', 'Camargo', 'Castro-Urdiales', 'Piélagos', 'Santoña', 'Laredo', 'Los Corrales de Buelna', 'Reinosa', 'El Astillero', 'Santa Cruz de Bezana', 'Cabezón de la Sal', 'Ramales de la Victoria', 'Suances', 'Comillas', 'Colindres', 'Cartes', 'Entrambasaguas', 'Torres', 'Renedo de Piélagos'] },
    { provincia: 'Castellón', poblaciones: ['Castellón de la Plana', 'Vila-real', 'Benicàssim', 'Burriana', 'La Vall d\'Uixó', 'Almassora', 'Vinaròs', 'Onda', 'Alcora', 'Nules', 'Segorbe', 'Oropesa del Mar', 'Benicarló', 'Grao de Castellón', 'Borriol', 'Almenara', 'Betxí', 'Vall d\'Alba', 'Benlloch', 'Cabanes'] },
    { provincia: 'Ciudad Real', poblaciones: ['Ciudad Real', 'Puertollano', 'Tomelloso', 'Alcázar de San Juan', 'Valdepeñas', 'Manzanares', 'Daimiel', 'La Solana', 'Miguelturra', 'Villarrubia de los Ojos', 'Campo de Criptana', 'Bolaños de Calatrava', 'Socuéllamos', 'Almadén', 'Argamasilla de Alba', 'Herencia', 'Malagón', 'Villanueva de los Infantes', 'Almagro', 'Santa Cruz de Mudela'] },
    { provincia: 'Córdoba', poblaciones: ['Córdoba', 'Lucena', 'Puente Genil', 'Montilla', 'Priego de Córdoba', 'Palma del Río', 'Cabra', 'Peñarroya-Pueblonuevo', 'La Carlota', 'La Rambla', 'Posadas', 'Hornachuelos', 'Villanueva de Córdoba', 'Fuente Palmera', 'Rute', 'Montemayor', 'Belmez', 'Fuente Obejuna', 'Doña Mencía', 'Aguilar de la Frontera'] },
    { provincia: 'Cuenca', poblaciones: ['Cuenca', 'Tarancón', 'Quintanar del Rey', 'San Clemente', 'Motilla del Palancar', 'Las Pedroñeras', 'Mota del Cuervo', 'Iniesta', 'Villanueva de la Jara', 'Horcajo de Santiago', 'Landete', 'Casasimarro', 'Belmonte', 'Villamayor de Santiago', 'Sisante', 'Honrubia', 'El Provencio', 'Campillo de Altobuey', 'Las Mesas', 'Tarancon', 'Carboneras de Guadazaón'] },
    { provincia: 'Girona', poblaciones: ['Girona', 'Figueres', 'Blanes', 'Lloret de Mar', 'Olot', 'Salt', 'Palafrugell', 'Sant Feliu de Guíxols', 'Caldes de Malavella', 'Banyoles', 'Ripoll', 'Sarrià de Ter', 'Torroella de Montgrí', 'Puigcerdà', 'Castell-Platja dAro', 'La Bisbal d\'Empordà', 'Besalú', 'Santa Coloma de Farners', 'Hostalric', 'Tossa de Mar'] },
    { provincia: 'Guadalajara', poblaciones: ['Guadalajara', 'Alcalá de Henares', 'Azulejos', 'Marchamalo', 'Alovera', 'El Casar', 'Molina de Aragón', 'Sigüenza', 'Yunquera de Henares', 'Cabanillas del Campo', 'Torrejón del Rey', 'Villanueva de la Torre', 'Horche', 'Chiloeches', 'Mondéjar', 'Pioz', 'Cifuentes', 'Pareja', 'Brihuega', 'Trillo'] },
    { provincia: 'Gipuzkoa', poblaciones: ['San Sebastián', 'Irun', 'Rentería', 'Éibar', 'Hernani', 'Lasarte-Oria', 'Tolosa', 'Zarautz', 'Hondarribia', 'Urnieta', 'Errenteria', 'Andoain', 'Orio', 'Usurbil', 'Lezo', 'Pasaia', 'Oñati', 'Azpeitia', 'Bergara', 'Beasain', 'Zumarraga'] },
    { provincia: 'Huelva', poblaciones: ['Huelva', 'Almonte', 'Lepe', 'Isla Cristina', 'Ayamonte', 'Moguer', 'Palos de la Frontera', 'Bollullos Par del Condado', 'Cartaya', 'La Palma del Condado', 'Valverde del Camino', 'Niebla', 'Villablanca', 'San Juan del Puerto', 'Aracena', 'Trigueros', 'Rociana del Condado', 'Bonares', 'Aljaraque', 'Gibraleón', 'Lucena del Puerto'] },
    { provincia: 'Huesca', poblaciones: ['Huesca', 'Monzón', 'Jaca', 'Barbastro', 'Sabiñánigo', 'Fraga', 'Boltaña', 'Grañén', 'Sariñena', 'Biescas', 'Aínsa', 'Benasque', 'Panticosa', 'Ayerbe', 'Ansó', 'Almudévar', 'Hecho', 'Tamarite de Litera', 'Campo', 'Sangarrén'] },
    { provincia: 'Islas Baleares', poblaciones: ['Palma de Mallorca', 'Ibiza', 'Manacor', 'Mao-Mahón', 'Santa Eulalia del Río', 'Inca', 'Ciutadella de Menorca', 'Alcúdia', 'Calvià', 'Llucmajor', 'Es Castell', 'Felanitx', 'Pollensa', 'Sant Antoni de Portmany', 'Sóller', 'Capdepera', 'Artà', 'Sant Josep de sa Talaia', 'Sant Llorenç des Cardassar', 'Sa Pobla', 'Andratx'] },
    { provincia: 'Jaén', poblaciones: ['Jaén', 'Linares', 'Andújar', 'Úbeda', 'Baeza', 'Martos', 'Alcalá la Real', 'Pozo Alcón', 'Villacarrillo', 'Torredonjimeno', 'Mancha Real', 'La Carolina', 'Cazorla', 'Villanueva del Arzobispo', 'Beas de Segura', 'Sabiote', 'Jódar', 'Torreperogil', 'Bailén', 'Peal de Becerro', 'Huelma'] },
    { provincia: 'La Coruña', poblaciones: ['La Coruña', 'Santiago de Compostela', 'Ferrol', 'Narón', 'Oleiros', 'Arteijo', 'Ribeira', 'Carballo', 'Ames', 'Culleredo', 'Betanzos', 'Teo', 'Boiro', 'Cambados', 'Noia', 'Pontevedra', 'Vilagarcía de Arousa', 'Cangas', 'Marín', 'Redondela', 'A Estrada', 'Vilalba'] },
    { provincia: 'La Rioja', poblaciones: ['Logroño', 'Calahorra', 'Arnedo', 'Haro', 'Alfaro', 'Lardero', 'Nájera', 'Santo Domingo de la Calzada', 'Cervera del Río Alhama', 'Rincón de Soto', 'Villamediana de Iregua', 'Autol', 'Navarrete', 'Fuenmayor', 'Entrena', 'Cenicero', 'Hervías', 'Viana', 'Cervera del Río Alhama', 'Cirueña', 'Agoncillo'] },
    { provincia: 'Las Palmas', poblaciones: ['Las Palmas de Gran Canaria', 'Telde', 'Santa Lucía de Tirajana', 'San Bartolomé de Tirajana', 'Arucas', 'Maspalomas', 'Agaete', 'Gáldar', 'Vecindario', 'Puerto del Rosario', 'La Oliva', 'Telde', 'Teror', 'Ingenio', 'Moya', 'Firgas', 'Arinaga', 'Agaete', 'Santa Brígida', 'San Nicolás', 'Tafira', 'Teguise'] },
    { provincia: 'León', poblaciones: ['León', 'Ponferrada', 'San Andrés del Rabanedo', 'Villaquilambre', 'Astorga', 'La Bañeza', 'Pola de Gordón', 'Cacabelos', 'Valverde de la Virgen', 'Cistierna', 'Trobajo del Camino', 'La Robla', 'Sahagún', 'Valencia de Don Juan', 'Villablino', 'Grajal de Campos', 'Santa María del Páramo', 'Villamañán', 'Vega de Espinareda', 'Matallana de Torío', 'Gordoncillo', 'Chozas de Abajo'] },
    { provincia: 'Lérida', poblaciones: ['Lleida', 'Mollerussa', 'Balaguer', 'Tàrrega', 'Seu d\'Urgell', 'Cervera', 'Solsona', 'Agramunt', 'Golmés', 'Alcarràs', 'Bellpuig', 'Almacelles', 'Artesa de Segre', 'Les Borges Blanques', 'Amposta', 'Alpicat', 'Tàrrega', 'Torrefarrera', 'Viella', 'Fraga', 'Les', 'La Granja d\'Escarp', 'Alcoletge'] },
    { provincia: 'Lugo', poblaciones: ['Lugo', 'Monforte de Lemos', 'Viveiro', 'Sarria', 'Foz', 'Vilalba', 'Chantada', 'Ribadeo', 'Láncara', 'Burela', 'Guitiriz', 'A Fonsagrada', 'Guntín', 'Baralla', 'Becerreá', 'A Pontenova', 'O Corgo', 'Castroverde', 'Lourenzá', 'O Valadouro', 'Meira', 'Mondoñedo', 'Outeiro de Rei', 'Palas de Rei'] },
    { provincia: 'Madrid', poblaciones: ['Madrid', 'Móstoles', 'Alcalá de Henares', 'Fuenlabrada', 'Leganés', 'Getafe', 'Alcorcón', 'Torrejón de Ardoz', 'Parla', 'Alcobendas', 'Coslada', 'Las Rozas de Madrid', 'San Sebastián de los Reyes', 'Rivas-Vaciamadrid', 'Valdemoro', 'Pozuelo de Alarcón', 'Colmenar Viejo', 'San Fernando de Henares', 'Tres Cantos', 'Alcalá de Henares', 'Collado Villalba', 'Arganda del Rey', 'Boadilla del Monte'] },
    { provincia: 'Málaga', poblaciones: ['Málaga', 'Marbella', 'Mijas', 'Torremolinos', 'Benalmádena', 'Fuengirola', 'Estepona', 'Rincón de la Victoria', 'Antequera', 'Vélez-Málaga', 'Torrox', 'Cártama', 'Alhaurín de la Torre', 'Coin', 'Ronda', 'Benahavís', 'Alhaurín el Grande', 'Nerja', 'Manilva', 'Casares', 'Archidona', 'Álora', 'Pizarra', 'Cuevas del Becerro', 'Humilladero', 'Alozaina', 'Cártama', 'Almogía', 'Monda', 'Tolox', 'Villanueva del Trabuco'] },
    { provincia: 'Murcia', poblaciones: ['Murcia', 'Cartagena', 'Lorca', 'Molina de Segura', 'Alcantarilla', 'Aguilas', 'Cieza', 'Yecla', 'Totana', 'Caravaca de la Cruz', 'Jumilla', 'San Javier', 'Lorca', 'Alhama de Murcia', 'San Pedro del Pinatar', 'Torre-Pacheco', 'Cehegín', 'Las Torres de Cotillas', 'La Unión', 'Águilas', 'Mazarrón', 'Archena', 'Fuente Álamo de Murcia'] },
    { provincia: 'Navarra', poblaciones: ['Pamplona', 'Tudela', 'Barañáin', 'Burlada', 'Estella-Lizarra', 'Tafalla', 'Sangüesa', 'Zizur Mayor', 'Ansoáin', 'Peralta', 'Corella', 'Villava', 'Castejón', 'Aoiz', 'Alsasua', 'Huarte', 'Lodosa', 'Cascante', 'Elizondo', 'Berriozar', 'Valtierra', 'Mendavia', 'Bera', 'Lesaka'] },
    { provincia: 'Orense', poblaciones: ['Ourense', 'Verín', 'O Barco de Valdeorras', 'Carballiño', 'Ourense', 'Pereiro de Aguiar', 'O Barco de Valdeorras', 'Allariz', 'Ribadavia', 'Xinzo de Limia', 'Celanova', 'Barbadás', 'A Rúa', 'Monforte de Lemos', 'A Peroxa', 'O Carballiño', 'O Pereiro de Aguiar', 'Ourense', 'O Barco de Valdeorras', 'Ribadavia', 'Xinzo de Limia', 'A Rúa', 'Celanova'] },
    { provincia: 'Palencia', poblaciones: ['Palencia', 'Villamuriel de Cerrato', 'Guardo', 'Dueñas', 'Saldaña', 'Venta de Baños', 'Carrion de los Condes', 'Astudillo', 'Aguilar de Campoo', 'Villada', 'Herrera de Pisuerga', 'Cervera de Pisuerga', 'Baltanás', 'Villalobón', 'Paredes de Nava', 'Villarramiel', 'Venta de Baños', 'Ampudia', 'Grijota', 'Becerril de Campos', 'Frómista', 'Fuentes de Valdepero', 'Villada'] },
    { provincia: 'Pontevedra', poblaciones: ['Vigo', 'Pontevedra', 'Vilagarcía de Arousa', 'Redondela', 'Cangas', 'Marín', 'Porriño', 'Sanxenxo', 'Lalín', 'Gondomar', 'Tui', 'Caldas de Reis', 'A Estrada', 'Moaña', 'Cuntis', 'Catoira', 'Ponteareas', 'O Grove', 'Bueu', 'A Guarda', 'Vilaboa', 'Caldas de Reis', 'Valga', 'Baiona'] },
    { provincia: 'Salamanca', poblaciones: ['Salamanca', 'Béjar', 'Ciudad Rodrigo', 'Santa Marta de Tormes', 'Villamayor', 'Guijuelo', 'Peñaranda de Bracamonte', 'Alba de Tormes', 'Carbajosa de la Sagrada', 'Vitigudino', 'Ledrada', 'Lumbrales', 'Aldeatejada', 'Ledesma', 'Cabrerizos', 'Terradillos', 'Calzada de Valdunciel', 'Santibáñez de la Sierra', 'Fuentes de Oñoro', 'Macotera', 'Bejar', 'Castellanos de Moriscos', 'Santa Marta de Tormes'] },
    { provincia: 'Segovia', poblaciones: ['Segovia', 'Cuéllar', 'La Cuesta', 'Carbonero el Mayor', 'Cantalejo', 'Nava de la Asunción', 'Espirdo', 'San Ildefonso', 'Real Sitio de San Ildefonso', 'El Espinar', 'Palazuelos de Eresma', 'Riaza', 'Agreda', 'Valverde del Majano', 'Villacastín', 'Sepúlveda', 'Cantimpalos', 'Bernuy de Porreros', 'Villacastín', 'Ayllón', 'Villacastín', 'Cuéllar', 'Real Sitio de San Ildefonso'] },
    { provincia: 'Sevilla', poblaciones: ['Sevilla', 'Dos Hermanas', 'Alcalá de Guadaíra', 'Utrera', 'Écija', 'Mairena del Aljarafe', 'Tomares', 'Carmona', 'Morón de la Frontera', 'Los Palacios y Villafranca', 'Arahal', 'Marchena', 'La Rinconada', 'La Algaba', 'Umbrete', 'Bormujos', 'Osuna', 'Camas', 'Coria del Río', 'Lebrija', 'Constantina', 'Cantillana', 'San Juan de Aznalfarache', 'Lora del Río', 'Alcalá del Río', 'Écija', 'Mairena del Aljarafe'] },
    { provincia: 'Soria', poblaciones: ['Soria', 'Agreda', 'Ólvega', 'Almazán', 'Covaleda', 'Duruelo de la Sierra', 'Golmayo', 'Ólvega', 'San Esteban de Gormaz', 'Covaleda', 'Ólvega', 'Golmayo', 'Ólvega', 'Duruelo de la Sierra', 'Golmayo', 'Ólvega', 'Duruelo de la Sierra', 'Covaleda', 'Ólvega', 'Almazán', 'Ólvega', 'Duruelo de la Sierra', 'Golmayo', 'Ólvega', 'Duruelo de la Sierra', 'Golmayo', 'Ólvega', 'Duruelo de la Sierra'] },
    { provincia: 'Tarragona', poblaciones: ['Tarragona', 'Reus', 'Salou', 'Cambrils', 'Vila-seca', 'El Vendrell', 'Tortosa', 'Valls', 'Calafell', 'Amposta', 'Constantí', 'Cunit', 'Sant Carles de la Ràpita', 'Tarragona', 'Cambrils', 'Reus', 'Salou', 'Tortosa', 'Valls', 'Vila-seca', 'El Vendrell', 'Amposta', 'Cunit', 'La Canonja', 'Deltebre', 'El Vendrell', 'Calafell', 'Cunit', 'Reus', 'Sant Carles de la Ràpita', 'Sant Jaume dels Domenys', 'Torredembarra'] },
    { provincia: 'Tenerife', poblaciones: ['Santa Cruz de Tenerife', 'San Cristóbal de La Laguna', 'Adeje', 'Arona', 'Puerto de la Cruz', 'Los Realejos', 'La Orotava', 'Candelaria', 'Granadilla de Abona', 'Tacoronte', 'La Victoria de Acentejo', 'Icod de los Vinos', 'El Sauzal', 'Los Llanos de Aridane', 'Garachico', 'Santa Úrsula', 'Los Silos', 'Santa Cruz de la Palma', 'Güímar', 'San Juan de la Rambla', 'Buenavista del Norte', 'Tegueste', 'El Tanque', 'La Matanza de Acentejo', 'Vilaflor', 'La Guancha', 'Santiago del Teide', 'La Guancha', 'Adeje', 'Candelaria'] },
    { provincia: 'Teruel', poblaciones: ['Teruel', 'Alcañiz', 'Andorra', 'Calamocha', 'Alcorisa', 'Valderrobres', 'Montalbán', 'Utrillas', 'Calanda', 'Cedrillas', 'Calamocha', 'Alcorisa', 'Alcañiz', 'Alcorisa', 'Alcañiz', 'Alcorisa', 'Calamocha', 'Montalbán', 'Valderrobres', 'Andorra', 'Alcorisa', 'Calamocha', 'Teruel', 'Alcañiz', 'Andorra', 'Calamocha', 'Alcorisa', 'Valderrobres', 'Montalbán', 'Utrillas', 'Calanda', 'Cedrillas', 'Calamocha', 'Alcorisa'] },
    { provincia: 'Toledo', poblaciones: ['Toledo', 'Talavera de la Reina', 'Illescas', 'Torrijos', 'Seseña', 'Sonseca', 'Yuncler', 'Quintanar de la Orden', 'Villacañas', 'Ocaña', 'Mora', 'Fuensalida', 'Bargas', 'Méntrida', 'Santa Cruz de la Zarza', 'La Puebla de Almoradiel', 'Consuegra', 'Los Yébenes', 'Yepes', 'Madridejos', 'Bargas', 'Seseña', 'Illescas', 'Ocaña', 'Yuncler', 'Sonseca', 'Quintanar de la Orden', 'Villacañas', 'Bargas', 'Sonseca', 'Yuncler', 'Quintanar de la Orden', 'Villacañas', 'Ocaña', 'Mora', 'Fuensalida', 'Bargas', 'Méntrida', 'Santa Cruz de la Zarza', 'La Puebla de Almoradiel', 'Consuegra', 'Los Yébenes', 'Yepes', 'Madridejos', 'Bargas', 'Seseña', 'Illescas', 'Ocaña', 'Yuncler', 'Sonseca', 'Quintanar de la Orden', 'Villacañas'] },
    { provincia: 'Valencia', poblaciones: ['Valencia', 'Gandia', 'Paterna', 'Torrent', 'Sagunto', 'Xirivella', 'Alzira', 'Mislata', 'Burjassot', 'Ontinyent', 'Oliva', 'Manises', 'Alaquàs', 'Xàtiva', 'Aldaia', 'Sueca', 'Cullera', 'Paiporta', 'Quart de Poblet', 'Llíria', 'Alginet', 'Picassent', 'Puçol', 'Carcaixent', 'Alcàsser', 'Godella', 'La Pobla de Vallbona', 'Silla', 'Xeraco', 'Benetússer', 'Buñol', 'Massamagrell', 'Xàtiva', 'Mislata', 'Gandia', 'Paterna', 'Xirivella', 'Alzira', 'Burjassot', 'Ontinyent', 'Oliva', 'Manises', 'Alaquàs', 'Aldaia', 'Xeraco', 'Sueca', 'Cullera'] },
    { provincia: 'Valladolid', poblaciones: ['Valladolid', 'Medina del Campo', 'Laguna de Duero', 'Arroyo de la Encomienda', 'Tordesillas', 'Cistérniga', 'Íscar', 'Zaratán', 'Simancas', 'Medina de Rioseco', 'Peñafiel', 'La Cistérniga', 'Rueda', 'Cabezón de Pisuerga', 'Olmedo', 'Pedrajas de San Esteban', 'Portillo', 'Viana de Cega', 'Boecillo', 'Tudela de Duero', 'Valladolid', 'Medina del Campo', 'Laguna de Duero', 'Arroyo de la Encomienda', 'Tordesillas', 'Cistérniga', 'Íscar', 'Zaratán', 'Simancas', 'Medina de Rioseco', 'Peñafiel', 'La Cistérniga', 'Rueda', 'Cabezón de Pisuerga', 'Olmedo', 'Pedrajas de San Esteban', 'Portillo', 'Viana de Cega', 'Boecillo', 'Tudela de Duero', 'Cigales', 'Iscar', 'Simancas', 'Valdestillas', 'Zaratán'] },
    { provincia: 'Vizcaya', poblaciones: ['Bilbao', 'Barakaldo', 'Getxo', 'Portugalete', 'Santurce', 'Basauri', 'Leioa', 'Galdakao', 'Durango', 'Sestao', 'Erandio', 'Amorebieta-Etxano', 'Bermeo', 'Ermua', 'Mungia', 'Valle de Trápaga-Trapagaran', 'Balmaseda', 'Gernika-Lumo', 'Zalla', 'Abanto y Ciérvana-Abanto Zierbena', 'Sopela', 'Markina-Xemein', 'Gatika', 'Loiu', 'Zamudio', 'Güeñes', 'Igorre', 'Derio', 'Arrigorriaga', 'Karrantza Harana/Valle de Carranza', 'Lemoa', 'Muskiz', 'Ondarroa', 'Zierbena', 'Artea', 'Gordexola', 'Lanestosa', 'Arakaldo', 'Areatza', 'Bedia', 'Fruiz', 'Ibarrangelu', 'Garai', 'Arrieta', 'Kortezubi', 'Gautegiz Arteaga', 'Mendata', 'Morga', 'Aulesti'] },
    { provincia: 'Zamora', poblaciones: ['Zamora', 'Benavente', 'Toro', 'Puebla de Sanabria', 'Fuentesaúco', 'Moraleja del Vino', 'Villaralbo', 'Santa Cristina de la Polvorosa', 'Villalpando', 'Villar del Buey', 'Villabrázaro', 'Villarrín de Campos', 'Villalazán', 'Montamarta', 'Villanueva de Azoague', 'Pueblica de Valverde', 'San Cristóbal de Entreviñas', 'Villar de Fallaves', 'Villafáfila', 'Villaferrueña', 'Villageriz', 'Villalube', 'Villalcampo', 'Villárdiga', 'Villardefrades', 'Villardiegua de la Ribera', 'Villardondiego', 'Villárdiga', 'Villardiegua de la Ribera', 'Villares de la Reina', 'Zamora', 'Benavente', 'Toro', 'Puebla de Sanabria', 'Fuentesaúco', 'Moraleja del Vino', 'Villaralbo', 'Santa Cristina de la Polvorosa', 'Villalpando', 'Villar del Buey', 'Villabrázaro', 'Villarrín de Campos', 'Villalazán', 'Montamarta', 'Villanueva de Azoague', 'Pueblica de Valverde', 'San Cristóbal de Entreviñas', 'Villar de Fallaves', 'Villafáfila', 'Villaferrueña', 'Villageriz', 'Villalube', 'Villalcampo', 'Villárdiga', 'Villardefrades', 'Villardiegua de la Ribera', 'Villardondiego', 'Villárdiga', 'Villardiegua de la Ribera', 'Villares de la Reina', 'Villaveza del Agua', 'Villaveza de Valverde', 'Villaveza de la Ribera', 'Villaveza del Vinalopó', 'Villavieja de Yeltes', 'Villavieja del Cerro', 'Villavicencio de los Caballeros', 'Villavicencio de los Caballeros', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná', 'Villavieja del Trabuco', 'Villavieja de Yeltes', 'Villavieja de la Ribera', 'Villavieja del Vinalopó', 'Villaviciosa de Córdoba', 'Villaviciosa de Odón', 'Villavieja', 'Villavieja del Lozoya', 'Villavieja del Manzano', 'Villavieja del Paraná']},
  ];

  @Input() labelNuevoMedico: string = 'Seleccionar nuevo médico:';
  @Input() labelNuevaFecha: string = 'Cambiar fecha:';
  @Input() labelNuevaHora: string = 'Cambiar hora:';
  @Input() labelInputCuatro: string = 'Asignar médico';

  @Input() mostrarNuevoMedico: boolean = true;
  @Input() mostrarNuevaFecha: boolean = true;
  @Input() mostrarNuevaHora: boolean = true;
  @Input() mostrarInputCuatro: boolean = false;

  
  @Input() mostrarEleccionMedico: boolean = false; // Select usado en Pedir cita (Paciente)

  // @Input() de 'Pedir cita' (Paciente):
  @Input() mostrarCheckboxesPedirCita: boolean = false;
  @Input() mostrarTercerCheckboxPedirCita: boolean = false;
  @Input() mostrarTercerLabelPedirCita: boolean = false;
  @Input() labelCheckboxesPedirCita: string = '';
  @Input() textoLabel1: string = '';
  @Input() textoLabel2: string = '';
  @Input() textoLabel3: string = '';
  @Input() valueCheckbox1: string = '';
  @Input() valueCheckbox2: string = '';
  @Input() valueCheckbox3: string = '';
  @Input() mostrarInputsPedirCita: boolean = false;

  @Input() rutaProximoPaso: string = '';
  @Input() rutaAnteriorPaso: string = '';

  @Input() mostrarBotonRetroceder: boolean = false;
  @Input() mostrarFormCrearPaciente: boolean = false;
  @Input() mostrarFormPrincipal: boolean = false;

  @Input() estilosFormulario: any = {};
  @Input() estiloBotonRetroceder: any = {};
  @Input() estiloBotonContinuar: any = {};

  poblacionesDisponibles: string[] = []; 

  onPoblacionChange(poblacionSeleccionada: string) {
    console.log('Población seleccionada:', poblacionSeleccionada);
  }

  actualizarPoblaciones(event: any) {
    const provinciaSeleccionada = event.target.value;

    // Busca la provincia en el array y obtiene las poblaciones asociadas
    const provincia = this.provinciasPoblaciones.find(item => item.provincia === provinciaSeleccionada);

    // Actualiza las poblaciones disponibles
    this.poblacionesDisponibles = provincia ? provincia.poblaciones : [];
  }

  onSubmit() {
    console.log('Formulario enviado:', this.paciente);
  }


// Función para seleccionar sólo un checkbox en 'Pedir cita':
  seleccionarUnCheckbox(event: any) {
    let checkboxes = document.getElementsByName('checkboxGroup') as NodeListOf<HTMLInputElement>;
  
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = false;
      }
    });
  }
}
