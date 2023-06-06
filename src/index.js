import Stage from './core';
import Matrix from  './matrix';
import Texture from './texture';
import './atlas';

import Pin from './pin';
import './loop';

import Root from './root';
import './canvas';
import Sprite from './sprite';
import Anim from './anim';
import Str from './str';
import './layout';
import Tween from './tween';
import Mouse from './mouse';
import Math from './util/math';

export default {
  ...Stage,
  Stage,
  Matrix,
  Texture,
  Mouse,
  Math,
  Sprite,
  Tween,
  Root,
  Pin,
  Str,
  Anim,
};
