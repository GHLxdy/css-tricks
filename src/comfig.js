import TranslucentBordersCode from '!!raw-loader!./components/TranslucentBorders';
import MultipleBordersCode from '!!raw-loader!./components/MultipleBorders';
import InnerRoundingCode from '!!raw-loader!./components/InnerRounding';
import BackgroundPositionCode from '!!raw-loader!./components/BackgroundPosition';
import StripesBackgroundCode from '!!raw-loader!./components/StripesBackground';
import EllipseCode from '!!raw-loader!./components/Ellipses';
import ParallelogramsCode from '!!raw-loader!./components/Parallelograms';
import CutoutCornersCode from '!!raw-loader!./components/CutoutCorners';
import PieChartsCode from '!!raw-loader!./components/PieCharts';
import PolygonCode from '!!raw-loader!./components/Polygons';
export const compText = [
  {
    name: 'TranslucentBorders',
    title: 'translucent borders 半透明边框',
    code: TranslucentBordersCode
  },
  {
    name: 'MultipleBorders',
    title: 'multiple borders 多重边框',
    code: MultipleBordersCode
  },
  {
    name: 'InnerRounding',
    title: 'inner rounding 边框内圆角',
    code: InnerRoundingCode
  },
  {
    name: 'BackgroundPosition',
    title: 'background position 背景定位',
    code: BackgroundPositionCode
  },
  {
    name: 'StripesBackground',
    title: 'stripes background 背景条纹',
    code: StripesBackgroundCode
  },
  {
    name: 'Ellipses',
    title: 'ellipse 圆/椭圆',
    code: EllipseCode
  },
  {
    name: 'Parallelograms',
    title: 'parallelograms 平行四边形',
    code: ParallelogramsCode
  },
  {
    name: 'CutoutCorners',
    title: 'cutout corners 切角效果',
    code: CutoutCornersCode
  },
  {
    name: 'PieCharts',
    title: 'pie charts 简易饼图',
    code: PieChartsCode
  },
  {
    name: 'Polygons',
    title: 'Polygon 多边形',
    code: PolygonCode
  }
];

function getComps() {
  let obj = {};
  compText.forEach(item => {
    obj[item.name] = () => import(`./components/${item.name}`);
  });
  return obj;
}
export const comps = getComps();
