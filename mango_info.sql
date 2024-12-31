-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: embezuri_db
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mango_info`
--

DROP TABLE IF EXISTS `mango_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mango_info` (
  `name` varchar(50) NOT NULL,
  `image` json DEFAULT NULL,
  `general_info` json DEFAULT NULL,
  `causes` json DEFAULT NULL,
  `remedies` json DEFAULT NULL,
  `id` varchar(36) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mango_info`
--

LOCK TABLES `mango_info` WRITE;
/*!40000 ALTER TABLE `mango_info` DISABLE KEYS */;
INSERT INTO `mango_info` VALUES ('CUTTING WEEVIL','\"app/v2/static/cutting weevil.jpg\"','[\"Mango Leaf Cutting Weevil is a pest that affects mango trees in many production regions. The pest is mainly found in the Asian countries of Pakistan, India, Bangladesh, etc. Symptoms include young leaves that have been cut and fall to the ground. Affected leaves look visibly cut.\"]','[\"The pest is referred by its scientific name \'Deporaus marginatus\' and is part of the beetle family. The adult females lay eggs on the leaves and then cut them, causing them to fall to the ground. Trees affected by Cutting weevil can exhibit slower growth rates and lower yields.\"]','[\"The cut leaves that have fallen to the ground and bearing eggs can be collected and burned to prevent spread.\", \"Cultivation of the soil under the trees to destroy the pupae larvae.\"]','06c8c8b9-3f56-4c06-8c3f-19d203c0c71e','2024-12-18 14:46:03','2024-12-18 14:46:03'),('DIE BACK','\"app/v2/static/die back.jpg\"','[\"Mango Die Back disease is a serious condition affecting mango trees leading to death of twigs and branches. Symptoms include discloration and darkening of the bark of twigs and branches, and leaves turn brown, curl upwards, and eventually fall off. The disease can cause complete defoliation, causing twigs to remain completely bare.\"]','[\"Die Back disease is believed to be caused by fungi pathogens such as \'Botryosphaeria dothidea\' and \'Lasiodiplodia theobromae\'. Other environmental factors such as heat, drought and lack of sufficient water can expose trees to infestation.\"]','[\"Remove and burn affected branches and twigs to control spread of the pathogen.\", \"Apply chemical fungicides such as copper oxychloride (0.3%) to infected trees to remove the pathogen.\"]','5061c9ca-0b9f-40db-b836-a427f728d7ef','2024-12-19 11:27:00','2024-12-19 11:27:00'),('HEALTHY','\"app/v2/static/healthy.jpg\"','[\"The mango tree \'Mangifera indica\' is a fruit bearing tree that is cultivated in many tropical regions, including Kenya. The tree can reach heights of 30 - 40 metres with wide dome-shaped canopies. The tree produces a sweet, juicy fruit that is oval-shaped, and yellow-green or orange in colour.\"]','[\"A healthy mango tree shows several distinct characteristics of vitality and growth. Mature leaves are glossy and vibrant green in colour, while young leaves are reddish or copper-coloured. The leaves have no signs of spots, curling or insect damage. The fruits are uniformly sized and shaped, with no signs of dark spots, blemishes or discolouration. Healthy trees have a dense, symmetrical canopy and they produce a high yield of quality fruits.\"]','[\"To maintain tree health, keep the orchard free from weeds and clear / burn any infested plant material to prevent diseases.\", \"Practice mulching around the base of the trees to conserve moisture. Irrigate the trees during prolonged seasons of dry weather.\", \"Plant flowering plants near or around the orchard to encourage pollination.\", \"Ensure tree canopies are well-pruned at all times for air circulation. Harvest fruits when they mature; don\'t leave them to over-ripen.\"]','5c5c7294-c2d2-49d1-87d4-27cf8bf3965f','2024-12-19 11:21:46','2024-12-19 11:21:46'),('ANTHRACNOSE','\"app/v2/static/anthracnose.jpg\"','[\"Mango Anthracnose Disease (MAD) is a destructive fungal disease that affects mango trees. The disease is caused by the pathogen \'Colletotrichum gloeosporioides\' which impacts various parts of the tree including leaves, twigs, and fruits. The disease can lead to significant losses if left to spread. Symptoms include dark brown spots on the leaves and drying of the twigs. Eventually, the fruit is affected leading to dark brown spots on the fruit and fruit rot.\"]','[\"The main cause for the disease that allows the fungus pathogen to flourish is warm, humid and rainy environments. Damp weather quickens the growth of the brown spots on the leaf or fruit leading to blight.\"]','[\"Regular pruning of trees in the orchard to ensure adequate sunlight and improve air circulation. This helps to reduce humid conditions that support fungal growth.\", \"Practice mango cultivation in areas with low humidity and well-drained soils.\", \"Remove parts of the plant that show severe symptoms to prevent spreading of the diseas to other trees.\"]','5cbafe2a-5d8e-413f-ac81-7b4729ea6bb3','2024-12-18 13:02:52','2024-12-18 13:02:52'),('GALL MIDGE','\"app/v2/static/gall midge.jpg\"','[\"Gall Midge are tiny flies measuring 1 - 2 cm whose larvae feed within plant tissue causing abnormal growth called galls. The galls can affect leaves, flowers, fruits and shoots. Severe infestation may result in leaf deformation and premature leaf drop. Galls on young fruit can affect fruit development and quality.\"]','[\"Gall Midge is caused by the midge insect larave feeding within plant tissues. Adult female larvae lay eggs on plant leaves, shoots and fruits causing the larvae to penetrate the plant material. The eggs hatch within 2 to 3 days.\"]','[\"Cultivate midge-resistant mango varieties to prevent infestation.\", \"Regularly prune and remove plant material that are infested to prevent spread of the larvae.\", \"Maintain farm / orchard cleanliness by clearing fallen debris to eliminate larvae pupation sites.\", \"Limited use of insecticides at early stages of infestation can help control spread, e.g. bifenthrin or fenitrothion.\"]','c8d5ebe4-6365-4ed6-aee0-c50c2d347ec0','2024-12-18 16:14:02','2024-12-18 16:14:02'),('SOOTY MOULD','\"app/v2/static/sooty mould.jpg\"','[\"Sooty Mould is a fungal disease that affects mango trees and it\'s characterized by a black, velvety coating on the surfaces of leaves, branches and fruits. The coating is caused by fungi that grow on the honeydew (sugary excretions) produced by sap-feeding insects such as mealy bugs, aphids, scales and whiteflies.\"]','[\"The disease is caused by sap-feeding insects such as mealy bugs and aphids which excrete honeydew on plant surfaces, thereby creating conditions for fungi growth. Moist conditions coupled with high humidity favour the spread of sooty mould.\"]','[\"Use organic treatments such as Neem oil to control the sap-sucking insects and fungi growth. Chemical insecticides can also be used to eliminate the insects.\", \"Mild soap with water can be sprayed on the affected areas to remove the mould. Let the soapy solution settle on the plants, then rinse off.\"]','d34d416d-52a4-41d2-aeb2-cbd61c8e1e2b','2024-12-18 15:39:40','2024-12-18 15:39:40'),('POWDERY MILDEW','\"app/v2/static/powdery mildew.jpg\"','[\"Powdery Mildew is a mango disease caused by the fungus \'Oidium mangiferae\' and it affects many regions across the world. The disease affects young leaves, buds and fruits and can lead to defoliation. Symptoms include: a white powdery fungal growth on leaves and fruits leading to leaf death and affected fruits dropping prematurely.\"]','[\"Conditions that support growth of the fungae include high levels of humidity, warm temperatures with cloud cover and heavy dew, and poor air circulation in the tree canopy.\"]','[\"Proper spacing and pruning of mango trees to ensure there\'s sufficient air circulation which limits spread of fungae.\", \"Planting mildew-resistant mango varieties can help reduce fungae infection.\", \"Removing affected plant material and debris curtails spread of the disease.\"]','ecc90fc8-7ddb-449f-bc76-db5148d8eeb7','2024-12-18 15:09:03','2024-12-18 15:09:03'),('BACTERIAL CANKER','\"app/v2/static/bacterial canker.jpg\"','[\"Bacterial Canker disease, also known as Bacterial Black Spot, is a destructive bacterial disease affecting many mango farms. The disease symptoms include: leaves exhibiting black angular spots, cracks and raised spots on young stems that make them susceptible to strong winds, and small black raised spots on fruits that can cause the fruit to crack.\"]','[\"The disease is caused by the bacterium pathogen \'Xanthomonas axonopodis pv. mangiferaeindicae\' through natural openings in mango tissues. Warm temperatures coupled with high humidity and rainfall can create conditions for the disease to flourish.\"]','[\"Use non-infected planting materials and root stock.\", \"Remove any infected plant material from the trees to prevent any further spread of the disease.\", \"Implement windbreaks on the farm to reduce damage caused by wind on young stems.\", \"Avoid cultivation activity when the foliage in the orchard is still wet.\"]','fa13f957-59fb-480f-b89c-0b54ae66db91','2024-12-18 13:39:22','2024-12-18 13:39:22');
/*!40000 ALTER TABLE `mango_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-31 10:38:12
