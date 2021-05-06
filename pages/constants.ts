/*
 * @Author: xiaotian@tangping
 * @Descriptions: 公用常量
 * @TodoList: 无
 * @Date: 2020-11-19 16:08:39
 * @Last Modified by: xiaotian@tangping
 * @Last Modified time: 2020-11-20 16:57:45
 */

import { getCurrentEnv, getBottomBarHeight } from '@common/utils';
import { screenWidth } from 'universal-device';

// 当前运行环境
const ENV = getCurrentEnv();

// 底部栏高度
const BOTTOM_BAR_HEIGHT = getBottomBarHeight();

// 躺平 logo
const TP_LOGO = 'https://gw.alicdn.com/tfs/TB1j0f4gRBh1e4jSZFhXXcC9VXa-80-80.png';

// 屏幕比例
const SCREEN_RATIO = screenWidth / 750;

export { ENV, BOTTOM_BAR_HEIGHT, TP_LOGO, SCREEN_RATIO };
