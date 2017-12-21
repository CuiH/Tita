-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: calendar
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `location` varchar(100) NOT NULL,
  `gps` varchar(100) DEFAULT 'no',
  `description` varchar(500) DEFAULT 'no',
  `image_url` varchar(500) DEFAULT 'no',
  `doc_link` varchar(500) DEFAULT 'no',
  `homepage_link` varchar(500) DEFAULT 'no',
  `type` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_gps` (`gps`),
  KEY `idx_start_time` (`start_time`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (40,'test3','2017-09-23 19:00:00','2017-09-23 21:00:00','Houston America China Town \\r\\nHouston','29.7049788 -95.54529629999999','9/23/2017 is the third installment of Houston Food Tour! Catch a ride to\\r\\nfor a delicious meal, an opportunity to get some shopping done, and as\\r\\nalways, fun with friends from America and around the world! Someone from\\r\\nKorea will share a little about Korean cuisine! We will meet at China Town,\\r\\nHouston. The activity will start at 7:00PM and will go back before 9:00PM.','no','no','','private'),(41,'test2','2017-09-25 16:00:00','2017-09-25 18:00:00','Houston Texas','29.7604267 -95.3698028','We are pleased to announce that we are now accepting poster proposals for\\r\\nconsideration to the Data Science Conference (www.dsconference.rice.edu)\\r\\nThe poster session, to be held on tomorrow 16:00 - 18:00 p.m., is a unique\\r\\nnetworking opportunity for students. This will take place at RMC, Rice\\r\\nUniversity, Houston, Texas.','no','no','www.dsconference.rice.edu','private'),(42,'test1','2017-09-25 02:00:00','2017-09-25 15:00:00','Armonk United States New York','41.1264849 -73.71401949999999','IBM (http://www.ibm.com) is an American multinational technology company\\r\\nheadquartered in Armonk, New York, United States, with operations in over\\r\\n170 countries. It will hold a Career Fair on tomorrow from 2:00AM to 3:00PM','no','no','http://www.ibm.com','private'),(43,'2018-2019 Teaching Opportunities Virtual Info Session','2017-09-19 19:00:00','2017-09-19 20:00:00','Virtual','31.3999717 74.2129801','IDEA Public Schools, one of the nation’s highest performing school districts, will host a virtual information session next week to share more information on the numerous teaching opportunities for the 2018-2019 school year and the application process for candidates. Want to learn more? Join the recruitment team on Tuesday, September 19th from 7-8PM CST.   RSVP Here: bit.ly/IDEAWebinarSept19 ','no','no','no','public'),(44,'alliantgroup Information Session','2017-09-25 19:00:00','2017-09-25 20:00:00','Peter and Nancy Huff House, 6100 Main St, Houston, TX 77005, USA','29.7205594 -95.3962938','','no','no','no','public'),(45,'GE Day','2017-09-24 14:00:00','2017-09-24 17:00:00','Duncan Hall, Houston, TX 77005, USA','29.7201321 -95.3987562','GE Day is a mini career fair with just GE businesses. It gives Rice students the opportunity to learn about all of GE’s different businesses, leadership programs, and affinity groups in a setting that is more conducive to making real connections than a typical career fair. During GE Day, you\'ll have the opportunity to learn about the cool technologies that GE businesses are producing, to hear from Rice students and alumni about their experiences in GE, to ask questions, and to submit your resume','no','no','no','public'),(46,'CANCELED - BP Trading Simulation','2017-09-21 19:00:00','2017-09-21 20:00:00','Sewall Hall - Room 309','29.7184593 -95.3980045','Opportunity to test your trading knowledge with a hands-on demonstration!','no','no','no','public'),(47,'Diversity in Professional Development Panel','2017-09-26 18:00:00','2017-09-26 20:00:00','Huff House - Room 107','29.7205594 -95.3962938','The School of Social Sciences and the CCD invite you to attend this great panel sponsored by Shell on \"Diversity in Professional Development\" in the context of overcoming challenges in life, academics, and business.   \n\nBy the end of the workshop, you will also be able to: \n · Gain practical tips and advice on how to address diversity and inclusion \n · Develop a plan of action to maximize your professional success \n · Improve your ability to overcome diversity challenges  \n\nFood will be provided','no','no','no','public'),(48,'Jet.com Information Session','2017-09-27 17:30:00','2017-09-27 18:30:00','Peter and Nancy Huff House, 6100 Main St, Houston, TX 77005, USA','29.7205594 -95.3962938','About Walmart.com and Jet.com  Work at a startup and the Fortune 1 Company at the same time: We are transforming e-commerce by combining a revolutionary pricing engine, a world-class technology and fulfillment platform, and incredible customer service. We’ve set out to create a new kind of e-commerce.\n\nJoin a mission-oriented company that cares about customers and the environment: You will be making a real difference by helping busy families save money and time so that they can live better, and ','no','no','no','public'),(49,'Citi Commercial Bank Webinar - Please RSVP! ','2017-09-29 13:30:00','2017-09-29 14:30:00','Virtual','31.3999717 74.2129801','CITI: COMMERCIAL BANK INFORMATIONAL WEBINAR Please RSVP by Tuesday, September 26, 2017: https://citicampus.co1.qualtrics.com/jfe/form/SV_0cF1M5BMqOKfo2h Date: Friday, September 29, 2017 Time: 2:30 - 3:30 PM EST \n\nPlease join representatives from Citi\'s Commercial Bank division to learn more about our 2018 Commercial Bank Full Time and Summer Analyst opportunities. These business representatives will help educate you on Citi\'s Commercial Bank division, interview techniques, and answer any questio','no','no','no','public'),(50,'Association of International Petroleum Negotiators - New Club Information Sessio','2017-09-27 16:00:00','2017-09-27 17:00:00','Peter and Nancy Huff House, 6100 Main St, Houston, TX 77005, USA','29.7205594 -95.3962938','AIPN connects professionals in the energy sector through networking events and educational programs, with the aim of improving energy negotiators’ effectiveness. We are represented in over 110 countries by more than 3,000 members from a variety of disciplines: commercial, financial, technical, academic and legal.\n\nWe invite all Rice students with an interest in energy to come learn more about us.  www.aipn.org ','no','no','no','public'),(51,'Career & Internship Expo','2017-09-19 10:00:00','2017-09-19 15:00:00','Tudor Fieldhouse, 6100 Main street, Houston, TX 77251, USA','29.7151 -95.40388999999999','','no','no','no','public'),(52,'Venture for America Coffee Chats','2017-09-18 10:00:00','2017-09-18 16:00:00','Raymond and Susan Brochstein Pavilion, Houston, TX 77005, USA','29.7178324 -95.40083489999999','Join Venture for America Talent Associate Maddie Stanley for a cup of coffee and casual conversation about VFA. Click here to sign up: https://docs.google.com/spreadsheets/d/1JQawzPrfz0eYEh-4VPl03B_4ahlJrxi87wHWYOdmfRM/edit?usp=sharing  \n\nFor more on the fellowship, check out our new recruitment video here: https://vimeo.com/232520922  \n\n*************  \nVenture for America is a two-year fellowship program for recent college graduates interested in entrepreneurship and working in a fast-paced, in','no','no','no','public'),(53,'Sendero Consulting Meet & Greet','2017-09-18 19:00:00','2017-09-18 20:30:00','McNair Hall, Room 218 - Jones Graduate School of Business','29.7175349 -95.40342760000001','Come join us for an informal Meet & Greet to learn more about what it\'s like to work at Sendero.  Sendero is a management consulting firm with expertise delivering Strategic Planning, Technology Enablement, Organizational Effectiveness and Analytics solutions across industries. Our mission is to be the management consulting partner most respected for our people, culture, and results. Sendero hires the best people from top consulting companies and universities, and leverages our talent to address','no','no','no','public'),(54,'Exploring Career Clusters: Arts, Communication, and Entertainment','2017-09-29 12:00:00','2017-09-29 13:00:00','Huff 107','38.4335955 -90.583274','','no','no','no','public'),(55,'Coffee Chats: JPMorgan Chase Consumer & Community Banking ','2017-09-20 14:00:00','2017-09-20 16:00:00','Raymond and Susan Brochstein Pavilion, Houston, TX 77005, USA','29.7178324 -95.40083489999999','Come join the Consumer & Community Banking Recruitment Team for an opportunity to connect, network, share and listen, all while enjoying a cup of coffee or tea. This will act as an informal gathering for Rice students to engage in professional development, participate in a dialogue about best practices with internship planning and learn about the Consumer & Community Banking division within JPMorgan & Chase Co','no','no','no','public'),(56,'Flow Traders Information Session','2017-09-20 17:30:00','2017-09-20 18:30:00','Huff House 107','29.7205594 -95.3962938','Trading Challenge Description\n\nFounded in 2004, Flow Traders is a leading, technology-enabled liquidity provider operating on a global scale that specializes in providing liquidity in ETPs, with operating offices in Amsterdam, Singapore, New York, and soon to be Hong Kong. Flow Traders has consistently received awards globally for ETF market making.\n\nFlow Traders offers hands-on training and a steep learning curve within the most dynamic of environments, providing you with exposure to a broad ma','no','no','no','public'),(57,'Internship & Job Search Workshop','2017-09-25 12:00:00','2017-09-25 13:00:00','Huff House - Room 107 ','29.7205594 -95.3962938','Gain insight on how to conduct an effective job or internship search, including what you might be missing and what tools and resources are available to help you throughout the process.   \n\nBy the end of the workshop, you will be able to: \n · Gain practical tips and advice on how to conduct an effective and efficient internship or job search both in the US and abroad\n · Develop an internship or job search plan of action to maximize your success\n · Explore resources and programs available at your ','no','no','no','public'),(58,'Relay GSE Informational Interviews ','2017-09-21 09:00:00','2017-09-21 13:00:00','Raymond and Susan Brochstein Pavilion, Houston, TX 77005, USA','29.7178324 -95.40083489999999','Following the Rice Fall Career & Internship Expo, sit down with the Relay Director of Recruitment to learn more about the application and selection process, work on your application, and receive support on your pathway to the classroom.','no','no','no','public'),(59,'Capital One Tech Talk and Demos','2017-09-20 19:00:00','2017-09-20 20:00:00','Peter and Nancy Huff House, 6100 Main St, Houston, TX 77005, USA','29.7205594 -95.3962938','Join Capital One Technologists to learn more about how we\'re trying to change banking for good! We\'ll do demos of current Capital One products and projects, as well as leave time for Q&A. ','no','no','no','public'),(60,'Quantlab Financial Information Session','2017-09-21 16:00:00','2017-09-21 17:00:00','Huff House 107','29.7205594 -95.3962938','Quantlab Financial, LLC is a dynamic, technology-driven firm supporting a large-scale quantitative trading operation across a wide range of global financial markets. Founded in 1998, Quantlab is an established presence and one of the pioneers in quantitative investment management with a track record of consistent profitability under varying market conditions.  \n\nQuantlab Financial supports a very successful proprietary trading organization (similar to a hedge fund, but no outside investors, so w','no','no','no','public'),(61,'Air Liquide Engineering Information Session','2017-09-26 16:00:00','2017-09-26 17:00:00','Huff House 107','29.7205594 -95.3962938','Please join Air Liquide to learn more about full time and internship opportunities in the chemicals and gases industry. Light refreshments will be served. For more information about Air Liquide, please visit our website at http://www.us.airliquide.com/.','no','no','no','public'),(62,'United Airlines Information Session','2017-09-18 16:00:00','2017-09-18 17:00:00','Peter and Nancy Huff House, 6100 Main St, Houston, TX 77005, USA','29.7205594 -95.3962938','Our event will be a company presentation/information session about internship and full-time opportunities at United Airlines for interested students.','no','no','no','public'),(63,'Hines Information Session','2017-09-21 17:30:00','2017-09-21 18:30:00','Peter and Nancy Huff House, 6100 Main St, Houston, TX 77005, USA','29.7205594 -95.3962938','Hines will be hosting an Information Session to network with students about the various career opportunities available at Hines, a privately owned global real estate investment firm.  We will have a recruiter and a professional from our Investment Management Group attending.  We will also be promoting our 2018 Summer Internship openings during this time.  Below is an overview of our organization as well as the internship opening: \n\nCompany Profile\nHines is a privately owned global real estate in','no','no','no','public'),(64,'Airbnb Information Session','2017-09-18 19:00:00','2017-09-18 20:00:00','Peter and Nancy Huff House, 6100 Main St, Houston, TX 77005, USA','29.7205594 -95.3962938','','no','no','no','public'),(65,'MRE Consulting, Ltd. Information Session','2017-09-25 17:30:00','2017-09-25 18:30:00','Huff House, Main Street, Houston, TX, United States','29.7205594 -95.3962938','MRE Consulting is a full-service firm that provides insights into the business and technology challenges faced by companies in a range of industries. We deliver value in three ways: through high-level business solutions, subject-matter expertise and staffing resources.','no','no','no','public'),(66,'F-1 Students Walk-In Advising','2017-09-12 14:00:00','2017-09-12 17:00:00','OISS','41.3122577 -72.9222853','OISS hosts walk-in advising on Tuesdays, 2:00 - 5:00 p.m. for F-1 students. No appointment needed! Students will be seen on a first come, first serve basis.\n\nPlease note that these walk-in hours are for quick questions and that advising is limited to F-1 queries. If you seek more thorough immigration advice, please call 713-348-6095 to schedule an appointment with an OISS advisor.','no','no','no','public'),(67,'CANCELLED - Safety Talk with RUPD','2017-09-26 12:00:00','2017-09-26 13:00:00','Grand Hall - RMC','29.7179698 -95.4017815','This event has been cancelled.\n\n<s>Learn strategies for keeping safe here in Houston from the Rice University Police Department.</s>','no','no','no','public'),(68,'CPT/OPT Workshop','2017-09-18 20:00:00','2017-09-18 21:00:00','Rice Village Apartments','29.7144041 -95.41559579999999','We will discuss the basics of applying for off-campus work authorization and\nbe available to answer your specific questions.\n\nFOR CPT, please note that you must be in full-time F-1 status for a full\nacademic year (two semesters) before you qualify for off-campus work.\nRecommended reading:\n- <a href=\"http://oiss.rice.edu/uploadedFiles/Docs/CPT%20Tutorial.pdf\">F-1 CPT Tutorial</a>\n- <a href=\"http://oiss.rice.edu/uploadedFiles/Docs/Dec%202014%20CPT%20Form.pdf\">F-1 CPT Form for <i>Undergraduate Stud','no','no','no','public'),(69,'CPT/OPT Workshop','2017-09-28 20:00:00','2017-09-28 21:00:00','Rice Graduate Apartments','29.725249 -95.398336','We will discuss the basics of applying for off-campus work authorization and\nbe available to answer your specific questions.\n\nFOR CPT, please note that you must be in full-time F-1 status for a full\nacademic year (two semesters) before you qualify for off-campus work.\nRecommended reading:\n- <a href=\"http://oiss.rice.edu/uploadedFiles/Docs/CPT%20Tutorial.pdf\">F-1 CPT Tutorial</a>\n- <a href=\"http://oiss.rice.edu/uploadedFiles/Docs/Dec%202014%20CPT%20Form.pdf\">F-1 CPT Form for <i>Undergraduate Stud','no','no','no','public'),(70,'CPT/OPT Workshop','2017-09-19 11:00:00','2017-09-19 12:00:00','OISS','41.3122577 -72.9222853','We will discuss the basics of applying for off-campus work authorization and\nbe available to answer your specific questions.\n\nFOR CPT, please note that you must be in full-time F-1 status for a full\nacademic year (two semesters) before you qualify for off-campus work.\nRecommended reading:\n- <a href=\"http://oiss.rice.edu/uploadedFiles/Docs/CPT%20Tutorial.pdf\">F-1 CPT Tutorial</a>\n- <a href=\"http://oiss.rice.edu/uploadedFiles/Docs/Dec%202014%20CPT%20Form.pdf\">F-1 CPT Form for <i>Undergraduate Stud','no','no','no','public'),(71,'Back Pew Tap Night','2017-09-21 17:00:00','2017-09-22 00:00:00','Valhalla\n6100 Main St, Houston, TX  77005, United States','29.7191447 -95.4003915','','no','no','no','public'),(72,'Founders takeover','2017-09-28 18:00:00','2017-09-28 23:00:00','Valhalla','41.0748188 -73.77513259999999','','no','no','no','public'),(73,'GSA Council Meeting','2015-09-15 18:00:00','2015-09-15 19:00:00','Captain\'s Lounge','31.994436 -81.10478189999999','','no','no','no','public'),(77,'ddas','2017-09-24 10:11:20','2017-09-26 20:11:20','zzzzz','no','no','no','no','no','public'),(78,'ssss','2017-09-24 10:11:20','2017-09-26 20:11:20','uyu','no','no','no','no','no','public'),(79,'pppp','2017-09-24 10:11:20','2017-09-26 20:11:20','aa','no','no','no','no','no','public'),(80,'6666','2017-09-24 10:11:20','2017-09-26 20:11:20','Houston','no','no','no','no','no','private');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_keyword_map`
--

DROP TABLE IF EXISTS `event_keyword_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event_keyword_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `keyword_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_ekm_event_keyword` (`event_id`,`keyword_id`),
  KEY `idx_` (`keyword_id`),
  CONSTRAINT `fk_ekm_event` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ekm_keywork` FOREIGN KEY (`keyword_id`) REFERENCES `keyword` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_keyword_map`
--

LOCK TABLES `event_keyword_map` WRITE;
/*!40000 ALTER TABLE `event_keyword_map` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_keyword_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `following`
--

DROP TABLE IF EXISTS `following`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `following` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `followee_id` int(11) NOT NULL,
  `follower_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_following_fee_fer` (`followee_id`,`follower_id`),
  KEY `fk_following_fer` (`follower_id`),
  CONSTRAINT `fk_following_user_1` FOREIGN KEY (`followee_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_following_user_2` FOREIGN KEY (`follower_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `following`
--

LOCK TABLES `following` WRITE;
/*!40000 ALTER TABLE `following` DISABLE KEYS */;
INSERT INTO `following` VALUES (8,1,2),(1,2,1),(7,3,1);
/*!40000 ALTER TABLE `following` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goal`
--

DROP TABLE IF EXISTS `goal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `location` varchar(100) DEFAULT 'no',
  `description` varchar(100) DEFAULT 'no',
  `repeat_day` varchar(7) DEFAULT 'no',
  `start_time` varchar(10) NOT NULL,
  `end_time` varchar(10) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_goal_user_idx` (`user_id`),
  CONSTRAINT `fk_goal_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goal`
--

LOCK TABLES `goal` WRITE;
/*!40000 ALTER TABLE `goal` DISABLE KEYS */;
INSERT INTO `goal` VALUES (37,'TEST GOAL 222','RICE RMC','no','WN','14:20:00','20:20:00',6),(38,'test goal 1','home','no','MTF','14:20:00','20:20:00',6),(39,'test goal 111','RVA','no','UA','14:20:00','20:20:00',6),(40,'aaa','zzzz','no','A','14:20:00','20:20:00',6),(41,'sss','zzzz','no','N','14:20:00','20:20:00',6),(42,'asdas','asdasds','no','U','14:20:00','20:20:00',6),(43,'zxczxc','zxczxczxc','no','W','14:20:00','20:20:00',6),(44,'sss','zzz','no','N','14:20:00','20:20:00',6),(45,'sss','zzz','no','W','14:20:00','20:20:00',6),(46,'zz','aaa','no','T','14:20:00','20:20:00',6),(47,'sss','zzzz','no','T','14:20:00','20:20:00',6),(48,'hhh','hhh','no','N','14:20:00','20:20:00',6),(49,'asdasdasd','sss','no','AN','14:20:00','20:20:00',6),(50,'123','','no','MWN','14:20:00','20:20:00',6),(51,'','','no','','14:20:00','20:20:00',6),(52,'666','','no','TUF','14:20:00','20:20:00',6),(53,'84596','','no','TF','14:20:00','20:20:00',6),(54,'gggo','here','no','UF','14:20:00','20:20:00',10),(55,'ppp','rice','no','UF','14:20:00','20:20:00',1),(56,'test','rice','no','WA','14:20:00','20:20:00',13),(57,'pp','aa','no','WA','14:20:00','20:20:00',1);
/*!40000 ALTER TABLE `goal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword`
--

DROP TABLE IF EXISTS `keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (1,'houston'),(2,'ccf'),(3,'hackrice'),(4,'Houston Food Tour'),(5,'delicious meal'),(6,'Korean cuisine'),(7,'China Town'),(8,'installment'),(9,'poster proposals for\\r\\nconsideration'),(10,'Data Science Conference'),(11,'poster session'),(12,'unique\\r\\nnetworking opportunity'),(13,'RMC'),(14,'American multinational technology'),(15,'Career Fair'),(16,'New York'),(17,'United States'),(18,'Armonk'),(20,'Houston Food Tour'),(21,'delicious meal'),(22,'Korean cuisine'),(23,'China Town'),(24,'installment'),(25,'poster proposals for\\r\\nconsideration'),(26,'Data Science Conference'),(27,'poster session'),(28,'unique\\r\\nnetworking opportunity'),(29,'RMC'),(30,'American multinational technology'),(31,'Career Fair'),(32,'New York'),(33,'United States'),(34,'Armonk');
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `liking`
--

DROP TABLE IF EXISTS `liking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `liking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_like_1_idx` (`user_id`),
  KEY `fk_like_event_idx` (`event_id`),
  CONSTRAINT `fk_like_event` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_like_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liking`
--

LOCK TABLES `liking` WRITE;
/*!40000 ALTER TABLE `liking` DISABLE KEYS */;
INSERT INTO `liking` VALUES (3,6,77),(4,6,73),(5,6,77),(6,6,70),(7,6,77),(8,10,77),(9,1,77),(10,1,77),(11,13,72),(12,1,77),(13,1,77),(14,1,77),(15,1,70);
/*!40000 ALTER TABLE `liking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `username` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'a@ch.com','123','ch'),(2,'zc@chen.com','123','zc'),(3,'lx@rice.edu','123','lx'),(5,'tm@rr.w','sss','tm'),(6,'1','2','test'),(7,'zzz','ww','asd'),(8,'','',''),(10,'4','1','dd'),(13,'qa','1','jj');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_email`
--

DROP TABLE IF EXISTS `user_email`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pwd` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq` (`user_id`,`email`),
  CONSTRAINT `fk_ue_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_email`
--

LOCK TABLES `user_email` WRITE;
/*!40000 ALTER TABLE `user_email` DISABLE KEYS */;
INSERT INTO `user_email` VALUES (1,1,'email4test.rice@gmail.com','rice1234567'),(2,6,'hcui@gmail.com','wojncuasjnmgasf'),(3,1,'hcui1995@gmail.com','sjdiomvnvuq'),(4,1,'gffdskkcc','fff');
/*!40000 ALTER TABLE `user_email` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_event_map`
--

DROP TABLE IF EXISTS `user_event_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_event_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `is_shared` varchar(1) NOT NULL DEFAULT 'f',
  `shared_time` datetime DEFAULT NULL,
  `source` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_uem_user_event` (`user_id`,`event_id`),
  KEY `idx_uem_event` (`event_id`),
  CONSTRAINT `fk_uem_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_event` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_event_map`
--

LOCK TABLES `user_event_map` WRITE;
/*!40000 ALTER TABLE `user_event_map` DISABLE KEYS */;
INSERT INTO `user_event_map` VALUES (10,1,40,'f',NULL,'email'),(11,1,41,'f',NULL,'email'),(12,1,42,'f',NULL,'email'),(13,6,48,'f',NULL,'self'),(14,6,49,'f',NULL,'self'),(15,6,52,'f',NULL,'self'),(16,6,55,'f',NULL,'self'),(17,6,77,'f',NULL,'self'),(18,6,73,'f',NULL,'self'),(20,6,70,'f',NULL,'self'),(22,10,77,'f',NULL,'self'),(23,1,77,'f',NULL,'self'),(25,13,72,'f',NULL,'self'),(29,1,70,'f',NULL,'self');
/*!40000 ALTER TABLE `user_event_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_goal_map`
--

DROP TABLE IF EXISTS `user_goal_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_goal_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `goal_id` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `is_shared` varchar(10) NOT NULL DEFAULT 'f',
  `shared_time` datetime DEFAULT NULL,
  `is_checked` varchar(10) NOT NULL DEFAULT 'f',
  `checked_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_ugm_goal` (`goal_id`),
  KEY `idx_ugm_user` (`user_id`),
  CONSTRAINT `fk_ugm_goal` FOREIGN KEY (`goal_id`) REFERENCES `goal` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ugm_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_goal_map`
--

LOCK TABLES `user_goal_map` WRITE;
/*!40000 ALTER TABLE `user_goal_map` DISABLE KEYS */;
INSERT INTO `user_goal_map` VALUES (75,6,37,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(76,6,37,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(77,6,38,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(78,6,38,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'t','2017-09-24 08:02:10'),(79,6,38,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(80,6,39,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(81,6,39,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(82,6,40,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(83,6,41,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(84,6,42,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(85,6,43,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(86,6,44,'2017-08-00 14:20:00','2017-08-00 20:20:00','f',NULL,'f',NULL),(87,6,45,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(88,6,46,'2017-08-26 14:20:00','2017-08-26 20:20:00','f',NULL,'f',NULL),(89,6,47,'0000-00-00 00:00:00','0000-00-00 00:00:00','f',NULL,'f',NULL),(90,6,48,'2017-09-24 14:20:00','2017-09-24 20:20:00','f',NULL,'t','2017-09-24 08:52:34'),(91,6,49,'2017-09-30 14:20:00','2017-09-30 20:20:00','f',NULL,'f',NULL),(92,6,49,'2017-10-01 14:20:00','2017-10-01 20:20:00','f',NULL,'f',NULL),(93,6,50,'2017-09-25 14:20:00','2017-09-25 20:20:00','f',NULL,'f',NULL),(94,6,50,'2017-09-27 14:20:00','2017-09-27 20:20:00','f',NULL,'f',NULL),(95,6,50,'2017-10-01 14:20:00','2017-10-01 20:20:00','f',NULL,'f',NULL),(96,6,52,'2017-09-29 14:20:00','2017-09-29 20:20:00','f',NULL,'f',NULL),(97,6,52,'2017-09-28 14:20:00','2017-09-28 20:20:00','f',NULL,'f',NULL),(98,6,52,'2017-09-26 14:20:00','2017-09-26 20:20:00','f',NULL,'f',NULL),(99,6,53,'2017-09-26 14:20:00','2017-09-26 20:20:00','f',NULL,'t','2017-09-24 08:52:22'),(100,6,53,'2017-09-29 14:20:00','2017-09-29 20:20:00','f',NULL,'t','2017-09-24 09:00:14'),(101,10,54,'2017-09-28 14:20:00','2017-09-28 20:20:00','f',NULL,'t','2017-09-24 09:31:49'),(102,10,54,'2017-09-29 14:20:00','2017-09-29 20:20:00','f',NULL,'t','2017-09-24 09:31:56'),(103,1,55,'2017-09-29 14:20:00','2017-09-29 20:20:00','f',NULL,'t','2017-09-24 13:45:25'),(104,1,55,'2017-09-28 14:20:00','2017-09-28 20:20:00','f',NULL,'t','2017-09-24 10:09:37'),(105,13,56,'2017-09-30 14:20:00','2017-09-30 20:20:00','f',NULL,'f',NULL),(106,13,56,'2017-09-27 14:20:00','2017-09-27 20:20:00','f',NULL,'t','2017-09-24 11:10:01'),(107,1,57,'2017-09-30 14:20:00','2017-09-30 20:20:00','f',NULL,'f',NULL),(108,1,57,'2017-09-27 14:20:00','2017-09-27 20:20:00','f',NULL,'t','2017-09-24 13:45:09');
/*!40000 ALTER TABLE `user_goal_map` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-24 21:09:32
