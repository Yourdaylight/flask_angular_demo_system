/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : user_q

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 29/06/2023 07:43:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for alembic_version
-- ----------------------------
DROP TABLE IF EXISTS `alembic_version`;
CREATE TABLE `alembic_version`  (
  `version_num` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`version_num`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of alembic_version
-- ----------------------------
INSERT INTO `alembic_version` VALUES ('e64950aea950');

-- ----------------------------
-- Table structure for intention
-- ----------------------------
DROP TABLE IF EXISTS `intention`;
CREATE TABLE `intention`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NULL DEFAULT NULL,
  `school_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `score` decimal(10, 2) NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of intention
-- ----------------------------
INSERT INTO `intention` VALUES (4, 1, '北京大学', 676.00, '2022-05-31 12:18:38');
INSERT INTO `intention` VALUES (6, 3, '北京大学', 676.00, '2022-05-31 13:11:56');
INSERT INTO `intention` VALUES (7, 3, '中国科技大学', 660.00, '2022-05-31 13:11:58');
INSERT INTO `intention` VALUES (8, 3, '清华大学', 1200.00, '2022-05-31 13:11:59');
INSERT INTO `intention` VALUES (9, 4, '北京大学', 676.00, '2022-06-15 16:08:34');
INSERT INTO `intention` VALUES (10, 4, '清华小学', 1150.00, '2022-07-10 15:09:14');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `score` decimal(10, 2) NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT NULL,
  `end_time` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES (1, '10001', '北京大学', '北京 985', 676.00, '2022-05-30 18:52:30', '2022-09-13 00:00:00');
INSERT INTO `school` VALUES (2, '20001', '中国科技大学', '安徽 985', 660.00, '2022-05-30 18:53:08', '2022-09-13 00:00:00');
INSERT INTO `school` VALUES (7, '10009', '清华小学', '测试', 1150.00, '2022-05-31 13:05:08', '2022-05-31 00:00:00');
INSERT INTO `school` VALUES (8, '231321', '111', '321321', 1232.00, '2023-06-29 06:24:46', '2023-05-31 00:00:00');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT NULL,
  `end_time` datetime NULL DEFAULT NULL,
  `teacher` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (2, '20001', '李四', '1213232332', '2022-05-30 18:53:08', '2022-09-13 00:00:00', NULL, NULL, '女');
INSERT INTO `student` VALUES (5, '10009', '王五', '王家村', '2022-05-31 11:32:31', '2022-02-02 00:00:00', NULL, NULL, '男');
INSERT INTO `student` VALUES (7, '10009', '赵六', '赵家村', '2022-05-31 13:05:08', '2022-05-31 00:00:00', NULL, NULL, '女');
INSERT INTO `student` VALUES (8, '231321', '钱7', '前家村', '2023-06-29 06:24:46', '2023-05-31 00:00:00', NULL, NULL, '男');
INSERT INTO `student` VALUES (9, '801', '张三四', '张家川', '2023-06-29 07:06:50', '2023-06-22 00:00:00', '李老师', '', 'male');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '111111', 1);
INSERT INTO `user` VALUES (2, 'test1', '111111', 2);
INSERT INTO `user` VALUES (3, 'zhangsan', '111', 2);
INSERT INTO `user` VALUES (4, '1', '1', 2);

SET FOREIGN_KEY_CHECKS = 1;
