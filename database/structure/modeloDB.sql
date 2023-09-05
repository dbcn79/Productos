-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para node
CREATE DATABASE IF NOT EXISTS `node` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `node`;

-- Volcando estructura para tabla node.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.categorias: ~12 rows (aproximadamente)
INSERT INTO `categorias` (`id`, `codigo`, `descripcion`, `activo`, `createdAt`, `updatedAt`) VALUES
	(1, 'LED', 'TV LED', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(2, 'OLED', 'TV OLED', 1, '2023-08-09 14:38:43', '2023-08-09 14:38:43'),
	(3, 'QLED', 'TD QLED', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(4, '8K', 'TV 8K', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(5, '4K UHD', 'TV 4K UHD', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(6, 'SMART', 'Smart TV', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(7, 'IA', 'TV con Inteligencia Artificial', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(8, 'Lifestyle', 'TV Lifestyle', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(9, 'HDR', 'TV HDR', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(10, 'FULL HD', 'TV FULL HD', 1, '2023-08-04 08:39:14', '2023-08-04 08:39:14'),
	(11, 'Accesorios TV', 'Accesorios TV', 1, '2023-08-04 08:39:35', '2023-08-04 08:39:35'),
	(99, 'NONE', 'Ninguna', 1, '2023-08-31 10:18:34', '2023-08-31 10:18:34');

-- Volcando estructura para tabla node.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) DEFAULT NULL,
  `apellidos` varchar(80) DEFAULT NULL,
  `direccion` varchar(300) DEFAULT NULL,
  `nif` varchar(10) DEFAULT NULL,
  `cp` varchar(20) DEFAULT NULL,
  `poblacion` varchar(60) DEFAULT NULL,
  `provincia` varchar(80) DEFAULT NULL,
  `movil` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `observaciones` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.clientes: ~2 rows (aproximadamente)
INSERT INTO `clientes` (`id`, `nombre`, `apellidos`, `direccion`, `nif`, `cp`, `poblacion`, `provincia`, `movil`, `email`, `observaciones`, `createdAt`, `updatedAt`) VALUES
	(1, 'Daniel', 'Muñoz Frias', 'Carrer Joan Ambrós i Lloreda 11 2C', '43542192H', '08100', 'Mollet del Vallés', 'Barcelona', '625773279', 'dbcn79@gmail.com', '', '2023-08-31 12:59:37', '2023-08-31 12:59:37'),
	(2, 'Raúl', 'Garcés Galante', 'Carrer Mossén Quintí Mallofré 30 2º3ª', '40326427K', '08030', 'Barcelona', 'Barcelona', '630201587', 'rgarcesg@gmail.com', '', '2023-09-04 08:40:26', '2023-09-04 08:40:26');

-- Volcando estructura para tabla node.contadores
CREATE TABLE IF NOT EXISTS `contadores` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `factura` int(11) NOT NULL DEFAULT 0,
  `abono` int(11) NOT NULL DEFAULT 0,
  `anyo` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.contadores: ~2 rows (aproximadamente)
INSERT INTO `contadores` (`id`, `factura`, `abono`, `anyo`, `createdAt`, `updatedAt`) VALUES
	(1, 22, 0, 2023, '2023-09-04 08:41:14', '2023-09-04 08:41:14');

-- Volcando estructura para tabla node.facturas
CREATE TABLE IF NOT EXISTS `facturas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `clienteId` int(11) unsigned DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `abono` int(11) unsigned DEFAULT NULL,
  `fechaEntrega` datetime DEFAULT NULL,
  `direccionFacturacion` varchar(150) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_facturas_abono` (`abono`) USING BTREE,
  KEY `FK_facturas_clientes` (`clienteId`),
  CONSTRAINT `FK_facturas_abono` FOREIGN KEY (`abono`) REFERENCES `facturas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_facturas_clientes` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.facturas: ~2 rows (aproximadamente)
INSERT INTO `facturas` (`id`, `clienteId`, `fecha`, `numero`, `abono`, `fechaEntrega`, `direccionFacturacion`, `createdAt`, `updatedAt`) VALUES
	(28, 1, '2023-08-30 22:00:00', '20230020', NULL, NULL, NULL, '2023-09-04 08:16:32', '2023-09-04 08:16:32'),
	(30, 2, '2023-09-03 22:00:00', '20230022', NULL, '2023-09-07 22:00:00', 'Carrer Mossén Quintí Mallofré 30 2º3ª', '2023-09-04 08:41:14', '2023-09-04 08:41:14');

-- Volcando estructura para tabla node.linfacturas
CREATE TABLE IF NOT EXISTS `linfacturas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `facturaId` int(11) unsigned NOT NULL DEFAULT 0,
  `productoId` int(11) unsigned NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  `precioUnitario` float DEFAULT NULL,
  `base` float DEFAULT NULL,
  `dto` float DEFAULT NULL,
  `importe` float DEFAULT NULL,
  `iva` float DEFAULT NULL,
  `importeIva` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_linfacturas_facturas` (`facturaId`),
  KEY `FK_linfacturas_productos` (`productoId`),
  CONSTRAINT `FK_linfacturas_facturas` FOREIGN KEY (`facturaId`) REFERENCES `facturas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_linfacturas_productos` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.linfacturas: ~5 rows (aproximadamente)
INSERT INTO `linfacturas` (`id`, `facturaId`, `productoId`, `descripcion`, `cantidad`, `precioUnitario`, `base`, `dto`, `importe`, `iva`, `importeIva`, `total`, `createdAt`, `updatedAt`) VALUES
	(58, 28, 4, 'OLED con Quantum HDR', 1, 1899, 1899, 10, 1709.1, 21, 358.91, 2068.01, '2023-09-04 08:16:32', '2023-09-04 08:16:32'),
	(59, 28, 7, 'Colocar y configurar TV', 1, 45, 45, 0, 45, 21, 9.45, 54.45, '2023-09-04 08:16:32', '2023-09-04 08:16:32'),
	(60, 28, 9, 'Cable HDMI Belkin Ultra de alta velocidad 2m negro', 3, 58, 174, 0, 174, 21, 36.54, 210.54, '2023-09-04 08:16:32', '2023-09-04 08:16:32'),
	(63, 30, 6, 'TV QD-OLED 164 cm (65") Sony XR-65A95K BRAVIA Google TV, 4K HDR, XR Cognitive Processor, XR Triluminos Max, Cam incluida', 1, 3149, 3149, 25, 2361.75, 21, 495.97, 2857.72, '2023-09-04 08:41:14', '2023-09-04 08:41:14'),
	(64, 30, 7, 'Colocar y configurar TV', 1, 45, 45, 0, 45, 21, 9.45, 54.45, '2023-09-04 08:41:14', '2023-09-04 08:41:14');

-- Volcando estructura para tabla node.marcas
CREATE TABLE IF NOT EXISTS `marcas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `activo` tinyint(4) DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.marcas: ~22 rows (aproximadamente)
INSERT INTO `marcas` (`id`, `descripcion`, `activo`, `createdAt`, `updatedAt`) VALUES
	(1, 'Samsung', 1, '2023-08-11 14:19:07', '2023-08-11 14:19:07'),
	(2, 'LG', 1, '2023-08-10 08:26:03', '2023-08-10 08:26:03'),
	(3, 'Sony', 1, '2023-08-10 08:26:10', '2023-08-10 08:26:10'),
	(4, 'XIAOMI', 1, '2023-08-10 08:26:24', '2023-08-10 08:26:24'),
	(5, 'Philips', 1, '2023-08-10 08:26:30', '2023-08-10 08:26:30'),
	(6, 'Hisense', 1, '2023-08-10 08:26:39', '2023-08-10 08:26:39'),
	(7, 'Panasonic', 1, '2023-08-10 08:26:45', '2023-08-10 08:26:45'),
	(8, 'Apple', 1, '2023-08-10 08:26:50', '2023-08-10 08:26:50'),
	(9, 'bSL', 1, '2023-08-10 08:26:55', '2023-08-10 08:26:55'),
	(10, 'Google', 1, '2023-08-10 08:27:03', '2023-08-10 08:27:03'),
	(11, 'Haier', 1, '2023-08-10 08:27:09', '2023-08-10 08:27:09'),
	(12, 'Inves', 1, '2023-08-10 08:27:16', '2023-08-10 08:27:16'),
	(13, 'LOEWE', 1, '2023-08-10 08:27:24', '2023-08-10 08:27:24'),
	(14, 'Logitech', 1, '2023-08-10 08:27:31', '2023-08-10 08:27:31'),
	(15, 'Microsoft', 1, '2023-08-10 08:27:37', '2023-08-10 08:27:37'),
	(16, 'Sveon', 1, '2023-08-10 08:27:44', '2023-08-10 08:27:44'),
	(17, 'TCL', 1, '2023-08-10 08:27:48', '2023-08-10 08:27:48'),
	(18, 'TD Systems', 1, '2023-08-10 08:27:57', '2023-08-10 08:27:57'),
	(19, 'Toshiba', 1, '2023-08-10 08:28:05', '2023-08-10 08:28:05'),
	(20, 'We. by Loewe', 1, '2023-08-10 08:28:18', '2023-08-10 08:28:18'),
	(21, 'Belkin', 1, '2023-08-31 10:23:02', '2023-08-31 10:22:56'),
	(99, 'None', 1, '2023-08-31 10:18:14', '2023-08-31 10:18:14');

-- Volcando estructura para tabla node.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  `marcaId` int(10) unsigned DEFAULT NULL,
  `categoriaId` int(10) unsigned DEFAULT NULL,
  `resolucionId` int(10) unsigned DEFAULT NULL,
  `tipoPantallaId` int(10) unsigned DEFAULT NULL,
  `precio` float DEFAULT 0,
  `pulgadas` int(11) DEFAULT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT 1,
  `resolucionPixeles` varchar(15) DEFAULT NULL,
  `formatoPantalla` varchar(10) DEFAULT NULL,
  `tipoHertzios` varchar(15) DEFAULT NULL,
  `diagonalPantalla` int(11) DEFAULT NULL,
  `hertzios` int(11) DEFAULT NULL,
  `hertziosNativos` int(11) DEFAULT NULL,
  `smartTV` tinyint(4) DEFAULT 1,
  `sistemaOperativo` varchar(20) DEFAULT NULL,
  `tipoSintonizador` varchar(50) DEFAULT NULL,
  `observaciones` text DEFAULT NULL,
  `agotado` tinyint(4) DEFAULT 0,
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_productos_marcas` (`marcaId`),
  KEY `FK_productos_categorias` (`categoriaId`),
  KEY `FK_productos_resoluciones` (`resolucionId`),
  KEY `FK_productos_tipospantallas` (`tipoPantallaId`),
  CONSTRAINT `FK_productos_categorias` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_productos_marcas` FOREIGN KEY (`marcaId`) REFERENCES `marcas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_productos_resoluciones` FOREIGN KEY (`resolucionId`) REFERENCES `resoluciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_productos_tipospantallas` FOREIGN KEY (`tipoPantallaId`) REFERENCES `tipospantallas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.productos: ~9 rows (aproximadamente)
INSERT INTO `productos` (`id`, `codigo`, `descripcion`, `marcaId`, `categoriaId`, `resolucionId`, `tipoPantallaId`, `precio`, `pulgadas`, `activo`, `resolucionPixeles`, `formatoPantalla`, `tipoHertzios`, `diagonalPantalla`, `hertzios`, `hertziosNativos`, `smartTV`, `sistemaOperativo`, `tipoSintonizador`, `observaciones`, `agotado`, `createdAt`, `updatedAt`) VALUES
	(1, 'H50P800UG', 'TV HQLED 126 cm (50") Haier H50P800UG 4K UHD, Smart TV Android 11, HDR10 Dolby Vision', 11, 3, 1, 2, 551.65, 50, 1, '3840x2160', '16:9', 'MMC', 126, 120, 60, 1, 'Android 11', 'DVB-T/T2 DVB-S2 DVB-C', 'A todo color: Tecnología HQLED', 0, '2023-08-17 17:52:43', NULL),
	(2, 'H85P800UG', 'TV HQLED 214 cm (85") Haier H85P800UG 4K UHD, Smart TV Android 11, HDR10 Dolby Vision', 11, 3, 1, 2, 1954.15, 85, 1, '3840x2160', '16:9', 'MMC', 214, 120, 60, 1, 'Android 11', 'DVB-T/T2 DVB-S2 DVB-C', 'A todo color: Tecnología HQLED', 0, '2023-08-17 17:52:37', '2023-08-17 17:40:08'),
	(3, 'H75P800UG', 'TV HQLED 189 cm (75") Haier H75P800UG 4K UHD, Smart TV Android 11, HDR10 Dolby Vision', 11, 3, 1, 2, 1274.15, 75, 1, '3840x2160', '16:9', 'MMC', 189, 120, 60, 1, 'Android 11', 'DVB-T/T2 DVB-S2 DVB-C', 'A todo color: Tecnología HQLED', 0, '2023-08-17 17:52:40', '2023-08-17 17:42:27'),
	(4, 'TQ65S93CAT', 'OLED con Quantum HDR', 1, 2, 1, 7, 1899, 65, 1, '3840x2160', '16:9', NULL, 163, NULL, NULL, 1, 'TIZEN', 'DVB-T2CS2 x 2', 'OLED con Quantum HDR', 0, '2023-08-17 17:50:23', '2023-08-17 17:48:28'),
	(5, 'TQ55S95CAT ', 'TV OLED 139 cm (55") Samsung TQ55S95CAT Quantum Matrix Technology 4K Inteligencia Artificial Smart TV', 1, 2, 1, 7, 1699, 55, 1, '3840x2160', '16:9', NULL, 138, NULL, NULL, 1, 'TIZEN', 'DVB-T2CS2 x 2', 'Descubre una nueva dimensión con el televisor Samsung OLED S95C, que te brindará una experiencia audiovisual impresionante.', 0, '2023-08-17 17:54:25', '2023-08-17 17:52:33'),
	(6, 'XR65A95KAEP', 'TV QD-OLED 164 cm (65") Sony XR-65A95K BRAVIA Google TV, 4K HDR, XR Cognitive Processor, XR Triluminos Max, Cam incluida', 3, 2, 1, 7, 3149, 65, 1, '3840x2160', '16:9', NULL, 164, 120, 100, 1, 'Android 10.0', 'DVB-T/T2 DVB-C DVB-S/S2 Digital', 'Nuestro nuevo panel OLED (QD-OLED) en el modelo XR-65A95K ofrece la paleta de colores OLED más amplia y brillante jamás vista. Todos los detalles mejoran en este televisor, hasta los contenidos en 2K y HD se escalan para estar lo más cerca de la calidad 4K. Los colores son espectaculares, gracias a una paleta de colores más amplia con XR Triluminos Max™. Para lograr una inmersión sensorial total, Acoustic Surface Audio+™ convierte la pantalla en un altavoz que garantiza que cada sonido proviene exactamente del lugar correcto en la escena. Todo el audio se escala para conseguir un sonido cinematográfico envolvente. La televisión se puede colocar con dos estilos diferentes para adaptarse a tu hogar. Una posición delantera para lograr la máxima inmersión o una posición trasera para colocarla lo más cerca de la pared. Ideal para gamers y Perfecto para PlayStation®5, con mayor capacidad de respuesta y juego más fluido. Todo es posible gracias a nuestras tecnologías especializadas como el modo de baja latencia automático en HDMI 2.1 y la frecuencia de actualización variable (VRR). Puedes acceder a más de 700.000 películas y series de televisión en este Google TV, así como usar la función de control por voz con manos libres. Nuestra nueva BRAVIA CAM incluso te permitirá disfrutar del control por gestos, video chats en pantalla grande y mucho más. Nuestro servicio de streaming exclusivo BRAVIA CORE está incluido en el modelo XR-65A95K. Cientos de películas te están esperando.', 0, '2023-08-31 10:00:59', '2023-08-31 09:46:05'),
	(7, '9999999990', 'Colocar y configurar TV', 99, 99, 99, 99, 45, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, 0, '2023-08-31 10:20:24', '2023-08-31 10:20:24'),
	(8, 'HW-S800B/ZF', 'Barra de sonido Samsung 2022 HW-S800B UltraSlim con Dolby Atmos', 1, NULL, NULL, NULL, 645.15, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 'La barra de sonido más fina de Samsung. ¡Solo 3.9cm de fondo!', 0, '2023-08-31 10:22:11', '2023-08-31 10:22:11'),
	(9, 'AV10176bt2M-BLK', 'Cable HDMI Belkin Ultra de alta velocidad 2m negro', 21, NULL, NULL, NULL, 58, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 'Compatible: Apple TV 4K', 0, '2023-08-31 10:24:09', '2023-08-31 10:24:09');

-- Volcando estructura para tabla node.resoluciones
CREATE TABLE IF NOT EXISTS `resoluciones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.resoluciones: ~6 rows (aproximadamente)
INSERT INTO `resoluciones` (`id`, `descripcion`, `activo`, `createdAt`, `updatedAt`) VALUES
	(1, 'UHD 4K', 1, '2023-08-10 10:21:40', '2023-08-10 10:21:40'),
	(2, 'Full HD', 1, '2023-08-10 10:21:50', '2023-08-10 10:21:50'),
	(3, '8K', 1, '2023-08-10 10:21:56', '2023-08-10 10:21:56'),
	(4, 'HD', 1, '2023-08-10 10:22:02', '2023-08-10 10:22:02'),
	(5, 'HD Ready', 1, '2023-08-10 10:22:08', '2023-08-10 10:22:08'),
	(99, 'NONE', 1, '2023-08-31 10:18:52', '2023-08-31 10:18:52');

-- Volcando estructura para tabla node.tipospantallas
CREATE TABLE IF NOT EXISTS `tipospantallas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla node.tipospantallas: ~11 rows (aproximadamente)
INSERT INTO `tipospantallas` (`id`, `descripcion`, `activo`, `createdAt`, `updatedAt`) VALUES
	(1, 'DLP', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(2, 'HQLED', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(3, 'LED', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(4, 'Mini LED', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(5, 'NanoCell 4K', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(6, 'Neo QLED', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(7, 'OLED', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(8, 'QLED', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(9, 'QNED 4K', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(10, 'QNED 8K', 1, '2023-08-10 09:56:54', '2023-08-10 09:56:54'),
	(99, 'NONE', 1, '2023-08-31 10:19:07', '2023-08-31 10:19:07');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
