-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2021 a las 04:10:04
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_crud_eml`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(40) NOT NULL,
  `apellidos` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `email`, `telefono`, `fecha_registro`, `fecha_modificacion`) VALUES
(1, 'aleck', 'bello', 'aleck.bello11@gmail.com', 23123, '2021-09-16 14:31:49', '2021-09-22 23:58:08'),
(2, 'maelo', 'ruiz', 'maeloruiz@hotmail.com', 1234232, '2021-09-16 19:19:53', '2021-09-16 17:20:29'),
(3, 'frank', 'ruiz', 'frankruiz@gmail.com', 3424324, '2021-09-16 19:20:34', '2021-09-16 17:20:54'),
(7, 'hector', 'lavoe', 'hectorlavoe@gmail.com', 21312, '2021-09-22 19:13:45', '2021-09-23 00:13:51'),
(8, 'eddie', 'santiago', 'ediiesantiago@hotmail.com', 12312, '2021-09-23 02:12:48', '2021-09-23 02:09:43'),
(9, 'gilberto', 'santarosa', 'santarosa@hotmail.com', 13213, '2021-09-22 20:41:15', '2021-09-23 02:09:50'),
(10, 'rey', 'ruiz', 'reyruiz@hotmail.com', 12312, '2021-09-22 20:41:24', '2021-09-23 01:41:28'),
(11, 'rey', 'sepulveda', 'reysepulveda@gmail.com', 14214, '2021-09-22 20:41:33', '2021-09-23 01:41:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
