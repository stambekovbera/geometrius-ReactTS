import {IFigure} from "../types/types";
import {
    isoscelesTriangleSquare,
    rightTriangleSquare,
    triangleMedian,
    trianglePerimeter,
    triangleSquare
} from "../utils/TriangleCalc";
import {squareDiagonal, squarePerimeter, squareSquare} from "../utils/SquareCalc";
import {rectangleDiagonal, rectanglePerimeter, rectangleSquare} from "../utils/RectangleCalc";
import {circleDiameter, circlePerimeter, circleRadius, circleSquare} from "../utils/CircleCalc";
import {rhombusDiagonal, rhombusPerimeter, rhombusSquare} from "../utils/RhombusCalc";
import {parallelogramDiagonal, parallelogramPerimeter, parallelogramSquare} from "../utils/ParallelogramCalc";
import {trapezoidDiagonal, trapezoidInRadius, trapezoidPerimeter, trapezoidSquare} from "../utils/TrapezoidCalc";
import {ellipsePerimeter, ellipseSquare} from "../utils/EllipseCalc";

export const figures: IFigure[] = [
    {
        id: 1,
        infoTitle: "triangle",
        className: "triangle",
        title: "Треугольник",
        body: "Геометрическая фигура, образованная тремя отрезками, которые соединяют три точки, не лежащие на одной прямой. Указанные три точки называются вершинами треугольника, а отрезки - сторонами треугольника.",
        content: [
            {
                mainContent: {
                    title: "Треугольник",
                    body: "Треугольником называется фигура, которая состоит из трёх точек, не лежащих на одной прямой, и трёх отрезков, попарно соединяющих эти точки. Точки называются вершинами треугольника, а отрезки — его сторонами."
                },
                secondContent: [
                    {
                        title: "ВИДЫ ТРЕУГОЛЬНИКОВ",
                        body: "Треугольник называется <b>равнобедренным</b>, если у него две сторны равны. Эти равные стороны называются боковыми сторонами, а третья сторона называется основанием треугольника.<br/><br/>Треугольник, у которого все <b>стороны равны</b>, называется <b>равносторонним</b> или <b>правильным</b>.<br/><br/>Треугольник называется <b>прямоугольным</b>, если у него <b>есть прямой угол</b>, то есть угол в 90°. Сторона прямоугольного треугольника, противолежащая прямому углу, называется гипотенузой, две другие стороны называются катетами.<br/> <br/>Треугольник называется <b>остроугольным</b>, если все три\n его угла — острые, то есть меньше 90°.<br/><br/>Треугольник называется <b>тупоугольным</b>, если один из его\n углов — тупой, то есть больше 90°."
                    },
                    {
                        title: "ОСНОВНЫЕ ЛИНИИ ТРЕУГОЛЬНИКА",
                        body: "<b>Медиана треугольника</b> — это отрезок, соединяющий\n" +
                            "                верщину треугольника с серединой противолежащей стороны\n" +
                            "                этого треугольника.\n" +
                            "                <br/>\n" +
                            "                <br/>\n" +
                            "                <b>Свойства медиан треугольника</b>\n" +
                            "                <ol>\n" +
                            "                    <li>\n" +
                            "                        Медиана разбивает треугольник на два треугольника\n" +
                            "                        одинаковой площади.\n" +
                            "                    </li>\n" +
                            "                    <li>\n" +
                            "                        Медианы треугольника пересекаются в одной точке, которая\n" +
                            "                        делит каждую из них в отношении 2:1, считая от вершины.\n" +
                            "                        Эта точка называется\n" +
                            "                        <b>центром тяжести</b> треугольника.\n" +
                            "                    </li>\n" +
                            "                    <li>\n" +
                            "                        Весь треугольник разделяется своими медианами на шесть\n" +
                            "                        равновеликих треугольников.\n" +
                            "                    </li>\n" +
                            "                </ol>\n" +
                            "                <br/>\n" +
                            "                <br/>\n" +
                            "                <b>Высотой</b> треугольника называется перпендикуляр,\n" +
                            "                проведенный из вершины треугольника к прямой, содержащей\n" +
                            "                противоположную сторону этого треугольника.\n" +
                            "                <br/>\n" +
                            "                <br/>\n" +
                            "                <b>Свойства высот треугольника</b>\n" +
                            "                <ol>\n" +
                            "                    <li>\n" +
                            "                        В <b>прямоугольном треугольнике</b> высота, проведенная\n" +
                            "                        из вершины прямого угла, разбивает его на два\n" +
                            "                        треугольника, подобные исходному.\n" +
                            "                    </li>\n" +
                            "                    <li>\n" +
                            "                        В <b>остроугольном треугольнике</b> две его высоты\n" +
                            "                        отсекают от него подобные треугольники.\n" +
                            "                    </li>\n" +
                            "                </ol>"
                    }
                ]
            }
        ],
        calcInfo: [
            {
                calcTitle: 'triangle_square',
                method: triangleSquare,
                calcTextContent: {
                    title: "Площадь треугольника",
                    body: "                                <p>\n" +
                        "                                    Треугольник — одна из самых основных фигур в геометрии.\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Самая известная и простая формула, которую почти все помнят\n" +
                        "                                    со школы:\n" +
                        "                                </p>\n" +
                        "                                <div className=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/areatriangleformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p> где a — длина основания треугольника, а h — высота\n" +
                        "                                    треугольника.</p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/areatriangle.png",
                                alt: "Площадь треугольника"
                            },
                            {
                                src: "../img/areatriangleformule.png",
                                alt: "Формула площади треугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "h",
                                title: "Высота (h)",
                                className: "h__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'triangle_perimeter',
                method: trianglePerimeter,
                calcTextContent: {
                    title: "Периметр треугольника",
                    body: "<p>\n" +
                        "                      Так как изначально периметр для любой фигуры — это сумма\n" +
                        "                      длин всех ее сторон, то периметр треугольника найти проще\n" +
                        "                      всего, зная все три стороны:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/perimetrtriangleformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>где a, b, c — стороны треугольника.</p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrtriangle.png",
                                alt: "Периметр треугольника"
                            },
                            {
                                src: "../img/perimetrtriangleformule.png",
                                alt: "Формула периметра треугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site"
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "a__site"
                            },
                            {
                                id: "c",
                                title: "Сторона (c)",
                                className: "c__site"
                            },
                            {
                                id: "res",
                                title: "Периметр (P)",
                                className: "calc__result"
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'triangle_median',
                method: triangleMedian,
                calcTextContent: {
                    title: "Медиана треугольника",
                    body: "<p>\n" +
                        "                                    Медиана треугольника выходит из угла и делит противолежащую\n" +
                        "                                    сторону пополам. Найти медиану в произвольном треугольнике\n" +
                        "                                    можно, используя теорему Стюарта.\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Теорема Стюарта гласит, что если на стороне треугольника\n" +
                        "                                    есть точка <b>А</b>, соединенная с углом напротив данной\n" +
                        "                                    стороны, то существует такое отношение всех трех сторон\n" +
                        "                                    треугольника, при котором становится возможным найти не\n" +
                        "                                    только части, на которые точка <b>А</b> разделила\n" +
                        "                                    вышеупомянутую сторону, но и отрезок, соединяющий точку\n" +
                        "                                    <b>А</b> с углом треугольника.\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Применительно к медиане, данное соотношение может быть\n" +
                        "                                    модифицировано до более простого:\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/mediantriangleformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>где m – медиана, опущенная на сторону c.</p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/median-triangle.png",
                                alt: "Медиана треугольника"
                            },
                            {
                                src: "../img/mediantriangleformule.png",
                                alt: "Формула медианы треугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site"
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site"
                            },
                            {
                                id: "c",
                                title: "Сторона (c)",
                                className: "c__site"
                            },
                            {
                                id: "res",
                                title: "Медиана a (m)",
                                className: "calc__result"
                            },
                            {
                                id: "resB",
                                title: "Медиана b (m)",
                                className: "calc__result"
                            },
                            {
                                id: "resC",
                                title: "Медиана c (m)",
                                className: "calc__result"
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'right_triangle_square',
                method: rightTriangleSquare,
                calcTextContent: {
                    title: "Площадь прямоугольного треугольника",
                    body: "<p>\n" +
                        "                                    Треугольник образуется соединением отрезками трех точек, не\n" +
                        "                                    лежащих на одной прямой.\n" +
                        "                                    <br/>\n" +
                        "                                    При этом точки называются вершинами треугольника, а отрезки\n" +
                        "                                    — его сторонами.\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Если один из углов прямой, то треугольник — прямоугольный.\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Площадь прямоугольного треугольника равна половине\n" +
                        "                                    произведения катетов треугольника:\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/arearighttriangleformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>\n" +
                        "                                    где a, b — катеты треугольника.\n" +
                        "                                </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/arearighttriangle.png",
                                alt: "Площадь прямоугольного треугольника"
                            },
                            {
                                src: "../img/arearighttriangleformule.png",
                                alt: "Формула площади прямоугольного треугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site"
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site"
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result"
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'isosceles_triangle_square',
                method: isoscelesTriangleSquare,
                calcTextContent: {
                    title: "Площадь равнобедренного треугольника",
                    body: "<p>\n" +
                        "                      Площадь равнобедренного треугольника вычисляется по\n" +
                        "                      классической формуле площади треугольника — произведение\n" +
                        "                      половины основания треугольника на его высоту. Высоту мы\n" +
                        "                      подставим в эту формулу из формулы высоты равнобедренного\n" +
                        "                      треугольника.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Самая простая формула:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/isoscelestriangleformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где b — основание треугольника, а h — высота треугольника.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/isoscelestriangle.png",
                                alt: "Площадь равнобедренного треугольника"
                            },
                            {
                                src: "../img/isoscelestriangleformule.png",
                                alt: "Формула площади равнобедренного треугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site"
                            },
                            {
                                id: "h",
                                title: "Высота (h)",
                                className: "h__site"
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result"
                            },
                        ]
                    }
                ]
            },
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'triangle_square',
            },
            {
                title: "Периметр",
                calcTitle: 'triangle_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь треугольника",
                calcTitle: 'triangle_square',
            },
            {
                title: "Периметр треугольника",
                calcTitle: 'triangle_perimeter',
            },
            {
                title: "Медиана треугольника",
                calcTitle: 'triangle_median',
            },
            {
                title: "Площадь прямоугольного треугольника",
                calcTitle: 'right_triangle_square',
            },
            {
                title: "Площадь равнобедренного треугольника",
                calcTitle: 'isosceles_triangle_square',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'triangle_square',
            },
            {
                title: "Периметр",
                calcTitle: 'triangle_perimeter',
            },
            {
                title: "Длина медианы",
                calcTitle: 'triangle_median',
            },
            {
                title: "Площадь прямоугольного треугольника",
                calcTitle: 'right_triangle_square',
            },
            {
                title: "Площадь равнобедренного треугольника",
                calcTitle: 'isosceles_triangle_square',
            },
        ]
    }, {
        id: 2,
        infoTitle: "square",
        className: "square",
        title: "Квадрат",
        body: "Правильный четырёхугольник, то есть четырёхугольник, у которого все углы равны и все стороны равны. Квадрат является одновременно частным случаем ромба и прямоугольника.",
        content: [
            {
                mainContent: {
                    title: "Квадрат",
                    body: "                    Квадрат — это прямоугольник, у которого все стороны равны.\n" +
                        "                    Можно дать и другое определение квадрата: квадрат — это\n" +
                        "                    ромб, у которого все углы прямые.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    Квадрату присущи все свойства параллелограмма. Квадрат можно\n" +
                        "                    считать ромбом с прямыми углами или прямоугольником с\n" +
                        "                    равными сторонами, поэтому квадрат обладает всеми свойствами\n" +
                        "                    ромба и прямоугольника."
                },
                secondContent: [
                    {
                        title: "Свойства квадрата",
                        body:
                            "                    <ol>\n" +
                            "                      <li>\n" +
                            "                        Все углы квадрата — прямые, все стороны квадрата —\n" +
                            "                        равны.\n" +
                            "                      </li>\n" +
                            "                      <li>\n" +
                            "                        Диагонали квадрата равны и пересекаются под прямым\n" +
                            "                        углом.\n" +
                            "                      </li>\n" +
                            "                      <li>Диагонали квадрата делят его углы пополам.</li>\n" +
                            "                    </ol>"
                    }
                ]
            }
        ],
        calcInfo: [
            {
                calcTitle: 'square_square',
                method: squareSquare,
                calcTextContent: {
                    title: "Площадь квадрата",
                    body: "<p>\n" +
                        "                                    Квадрат – это прямоугольник, в котором все стороны равны,\n" +
                        "                                    поэтому площадь квадрата считается точно также, с учетом\n" +
                        "                                    того, что произведение одинаковых сторон выражается в виде\n" +
                        "                                    второй степени. Именно поэтому еще одно название второй\n" +
                        "                                    степени, которое мы часто используем, – это квадрат (число n\n" +
                        "                                    в квадрате - n2, и т.д.).\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Самая простая формула:\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/areasquareformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>\n" +
                        "                                    где a — сторона квадрата.\n" +
                        "                                </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/areasquare.png",
                                alt: "Площадь квадрата"
                            },
                            {
                                src: "../img/areasquareformule.png",
                                alt: "Формула площади квадрата"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'square_perimeter',
                method: squarePerimeter,
                calcTextContent: {
                    title: "Периметр квадрата",
                    body: "                                <p>\n" +
                        "                                    Квадрат, как самая простая и многофункциональная\n" +
                        "                                    геометрическая фигура с четырьмя равными сторонами, имеет\n" +
                        "                                    самую простую формулу для нахождения периметра\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/perimetrsquareformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>\n" +
                        "                                    где a — сторона квадрата.\n" +
                        "                                </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrsquare.png",
                                alt: "Периметр квадрата"
                            },
                            {
                                src: "../img/perimetrsquareformule.png",
                                alt: "Формула периметра квадрата"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "res",
                                title: "Периметр (P)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'square_diagonal',
                method: squareDiagonal,
                calcTextContent: {
                    title: "Диагональ квадрата",
                    body: "                    <p>\n" +
                        "                      Проведенная внутри квадрата диагональ делит его на два\n" +
                        "                      одинаковых равнобедренных прямоугольных треугольника, у\n" +
                        "                      которых гипотенузой будет диагональ, а катетами — стороны\n" +
                        "                      квадрата. Отсюда, диагональ d как гипотенузу прямоугольного\n" +
                        "                      треугольника с равными сторонами а, можно вычислить по\n" +
                        "                      теореме Пифагора.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Диагональ квадрата равна стороне квадрата, умноженной на\n" +
                        "                      корень из двух:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/diagonalsquareformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — сторона квадрата.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/diagonalsquare.png",
                                alt: "Диагональ квадрата"
                            },
                            {
                                src: "../img/diagonalsquareformule.png",
                                alt: "Формула диагонали квадрата"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "res",
                                title: "Диагональ (d)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'square_square',
            },
            {
                title: "Периметр",
                calcTitle: 'square_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь квадрата",
                calcTitle: 'square_square',
            },
            {
                title: "Периметр квадрата",
                calcTitle: 'square_perimeter',
            },
            {
                title: "Диагональ квадрата",
                calcTitle: 'square_diagonal',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'square_square',
            },
            {
                title: "Периметр",
                calcTitle: 'square_perimeter',
            },
            {
                title: "Диагональ",
                calcTitle: 'square_diagonal',
            },
        ]
    }, {
        id: 3,
        infoTitle: "rectangle",
        className: "rectangle",
        title: "Прямоугольник",
        body: "Четырёхугольник, у которого все углы прямые. В евклидовой геометрии для того, чтобы четырёхугольник был прямоугольником, достаточно, чтобы хотя бы три его угла были прямые, тогда четвёртый угол в силу теоремы о сумме углов многоугольника также будет равен 90°.",
        content: [
            {
                mainContent: {
                    title: "Прямоугольник",
                    body: "                    Прямоугольник — это четырехугольник у которого две\n" +
                        "                    противоположные стороны равны и все четыре угла одинаковы.                     <br />\n" +
                        "                    <br/>Прямоугольники отличаются между собой только отношением\n" +
                        "                    длинной стороны к короткой, но все четыре угла у них прямые,\n" +
                        "                    то есть по 90 градусов. Длинную сторону прямоугольника\n" +
                        "                    называют длиной прямоугольника, а короткую - шириной\n" +
                        "                    прямоугольника. Стороны прямоугольника одновременно является\n" +
                        "                    его высотами."
                },
                secondContent: [
                    {
                        title: "Cвойства прямоугольника",
                        body: "<ol>\n" +
                            "                      <li>\n" +
                            "                        Прямоугольником могут быть параллелограмм, квадрат или\n" +
                            "                        ромб.\n" +
                            "                      </li>\n" +
                            "                      <li>\n" +
                            "                        Противоположные стороны прямоугольника имеют одинаковую\n" +
                            "                        длину, то есть они равны.\n" +
                            "                      </li>\n" +
                            "                      <li>\n" +
                            "                        Противоположные стороны прямоугольника параллельны.\n" +
                            "                      </li>\n" +
                            "                      <li>\n" +
                            "                        Прилегающие стороны прямоугольника всегда\n" +
                            "                        перпендикулярны.\n" +
                            "                      </li>\n" +
                            "                      <li>Все четыре угла прямоугольника прямые.</li>\n" +
                            "                      <li>Диагонали прямоугольника имеют одинаковые длины.</li>\n" +
                            "                    </ol>"
                    },
                ]
            }
        ],
        calcInfo: [
            {
                calcTitle: 'rectangle_square',
                method: rectangleSquare,
                calcTextContent: {
                    title: "Площадь прямоугольника",
                    body: "<p>\n" +
                        "                                    Так как прямоугольник происходит от параллелограмма, то у\n" +
                        "                                    него точно так же равны противоположные стороны.\n" +
                        "                                    Прямоугольником будет считаться тот параллелограмм, у\n" +
                        "                                    которого хотя бы один из углов равен 90˚ – так называемый\n" +
                        "                                    «выпрямленный» параллелограмм. Площадь прямоугольника\n" +
                        "                                    вычислить просто – умножив одну его сторону на другую:\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/arearectangleformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>\n" +
                        "                                    где a и b — стороны прямоугольника.\n" +
                        "                                </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/arearectangle.png",
                                alt: "Площадь прямоугольника"
                            },
                            {
                                src: "../img/arearectangleformule.png",
                                alt: "Формула площади прямоугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'rectangle_perimeter',
                method: rectanglePerimeter,
                calcTextContent: {
                    title: "Периметр прямоугольника",
                    body: "<p>\n" +
                        "                                    Периметр прямоугольника рассчитывается сложением длин всех\n" +
                        "                                    его сторон. С учетом того, что у прямоугольника\n" +
                        "                                    противоположные стороны равны, то формула нахождения\n" +
                        "                                    периметра трансформируется, объединяя парные стороны:\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/perimetrrectangleformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>\n" +
                        "                                    где a и b — стороны прямоугольника.\n" +
                        "                                </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrrectangle.png",
                                alt: "Периметр прямоугольника"
                            },
                            {
                                src: "../img/perimetrrectangleformule.png",
                                alt: "Формула периметра прямоугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site",
                            },
                            {
                                id: "res",
                                title: "Периметр (P)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'rectangle_diagonal',
                method: rectangleDiagonal,
                calcTextContent: {
                    title: "Диагональ прямоугольника",
                    body: "                    <p>\n" +
                        "                      Четырехугольник, противоположные стороны которого\n" +
                        "                      параллельны друг другу, а все углы прямые, называется\n" +
                        "                      прямоугольником. Отрезок, который соединяет две\n" +
                        "                      противоположные вершины прямоугольника, будет его диагональю\n" +
                        "                      d. В прямоугольнике обе диагонали равны. Если провести в\n" +
                        "                      прямоугольнике диагональ, то она поделит его на 2 одинаковых\n" +
                        "                      прямоугольных треугольника, у которых диагональ d будет\n" +
                        "                      гипотенузой, а стороны прямоугольника a, b — катетами. Если\n" +
                        "                      известны длины сторон прямоугольника, несложно определить\n" +
                        "                      его диагональ, используя теореме Пифагора. Согласно теоремы\n" +
                        "                      квадрат гипотенузы равен сумме квадратов катетов.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Исходя из этого, гипотенуза равна корню квадратному из суммы\n" +
                        "                      квадратов катетов. Как было отмечено выше, гипотенуза\n" +
                        "                      является диагональю прямоугольника, соответственно она\n" +
                        "                      вычисляется по формуле:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/diagonalrectangleformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a и b — стороны прямоугольника.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/diagonalrectangle.png",
                                alt: "Диагональ прямоугольника"
                            },
                            {
                                src: "../img/diagonalrectangleformule.png",
                                alt: "Формула диагонали прямоугольника"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site",
                            },
                            {
                                id: "res",
                                title: "Диагональ (d)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'rectangle_square',
            },
            {
                title: "Периметр",
                calcTitle: 'rectangle_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь прямоугольника",
                calcTitle: 'rectangle_square',
            },
            {
                title: "Периметр прямоугольника",
                calcTitle: 'rectangle_perimeter',
            },
            {
                title: "Диагональ прямоугольника",
                calcTitle: 'rectangle_diagonal',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'rectangle_square',
            },
            {
                title: "Периметр",
                calcTitle: 'rectangle_perimeter',
            },
            {
                title: "Диагональ",
                calcTitle: 'rectangle_diagonal',
            },
        ]
    }, {
        id: 4,
        infoTitle: "circle",
        className: "circle",
        title: "Круг",
        body: "Часть плоскости, лежащая внутри окружности. Другими словами, это геометрическое место точек плоскости, расстояние от которых до заданной точки, называемой центром круга, не превышает заданного неотрицательного числа R. Число R называется радиусом этого круга.",
        content: [
            {
                mainContent: {
                    title: "Круг",
                    body: "Круг — это множество точек на плоскости, ограниченных\n" +
                        "                    окружностью (т.е. лежащих внутри окружности).\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Сектор круга</b> — область внутри круга, которая\n" +
                        "                    образована двумя радиусами и дугой между ними.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Сегмент круга</b> — область, образованная в результате\n" +
                        "                    деления круга хордой, которая в свою очередь является частью\n" +
                        "                    <b>секущей</b> (прямой), пересекающей круг.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Свойства круга</b>\n" +
                        "                    <ol>\n" +
                        "                      <li>\n" +
                        "                        Центр круга совпадает с центром ограничивающей его\n" +
                        "                        окружности. Чаще всего, обозначается буквой <b>O</b>.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        <b>Радиус круга (R)</b> является, в т.ч., радиусом\n" +
                        "                        граничной окружности. Это отрезок, соединяющий центр\n" +
                        "                        круга с любой точкой, лежащей на его границе, т.е. на\n" +
                        "                        окружности.\n" +
                        "                        <br />\n" +
                        "                        <br />\n" +
                        "                        Хорда, проходящая через центр круга называется его\n" +
                        "                        <b>диаметром (d)</b>.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        Периметр круга равняется длине ограничивающей его\n" +
                        "                        окружности.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        Круг по сравнению с другими фигурами имеет наибольшую\n" +
                        "                        площадь при заданном периметре.\n" +
                        "                      </li>\n" +
                        "                    </ol>"
                },
                secondContent: []
            }
        ],
        calcInfo: [
            {
                calcTitle: 'circle_square',
                method: circleSquare,
                calcTextContent: {
                    title: "Площадь круга",
                    body: "<p>\n" +
                        "                                    Площадь круга — это мера заполненности области внутри\n" +
                        "                                    окружности, являющейся границей круга, выраженная в\n" +
                        "                                    квадратных единицах (м2, см2, кв.ед.). В математике эти\n" +
                        "                                    единицы могут разными.\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Для того чтобы найти площадь круга, существует единственная\n" +
                        "                                    формула, которую нужно запомнить – это произведение числа π\n" +
                        "                                    на квадрат радиуса:\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/areacircleformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>\n" +
                        "                                    где r — радиус круга.\n" +
                        "                                </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/areacircle.png",
                                alt: "Площадь круга"
                            },
                            {
                                src: "../img/areacircleformule.png",
                                alt: "Формула площади круга"
                            }
                        ],
                        navigation: [
                            {
                                id: "r",
                                title: "Радиус (r)",
                                className: "r__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'circle_perimeter',
                method: circlePerimeter,
                calcTextContent: {
                    title: "Длина окружности круга",
                    body: "                    <p>\n" +
                        "                      Определение круга часто звучит, как часть плоскости, которая\n" +
                        "                      ограничена окружностью. Окружность круга является плоской\n" +
                        "                      замкнутой кривой. Все точки, расположенные на кривой,\n" +
                        "                      удалены от центра круга на одинаковое расстояние. В круге\n" +
                        "                      его длина и периметр одинаковы. Соотношение длины любой\n" +
                        "                      окружности и ее диаметра постоянное и обозначается числом π\n" +
                        "                      = 3,1415. Если вам известна величина радиуса круга, то\n" +
                        "                      определить периметр (или длину) этой фигуры можно по\n" +
                        "                      формуле:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/perimetrcircleformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где r — радиус круга.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrcircle.png",
                                alt: "Окружность круга"
                            },
                            {
                                src: "../img/perimetrcircleformule.png",
                                alt: "Формула окружности круга"
                            }
                        ],
                        navigation: [
                            {
                                id: "r",
                                title: "Радиус (r)",
                                className: "r__site",
                            },
                            {
                                id: "res",
                                title: "Окружность (P)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'circle_diameter',
                method: circleDiameter,
                calcTextContent: {
                    title: "Диаметр круга",
                    body: "<p>\n" +
                        "                      Диаметр круга или сферы – это хорда или линия, соединяющая\n" +
                        "                      две точки окружности, и проходящая через центр круга. Таким\n" +
                        "                      образом, диаметр – это два радиуса, расположенных по\n" +
                        "                      отношению друг к другу под углом 180°, так чтобы получить\n" +
                        "                      прямую линию.\n" +
                        "                      <br />\n" +
                        "                      Диаметр круга напрямую связан с радиусом и представляет\n" +
                        "                      собой его удвоенное значение.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Диаметр круга можно найти по формуле:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/diametrcircleformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где P — длина окружности круга.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/diametrcircle.png",
                                alt: "Диаметр круга"
                            },
                            {
                                src: "../img/diametrcircleformule.png",
                                alt: "Формула диаметра круга"
                            }
                        ],
                        navigation: [
                            {
                                id: "p",
                                title: "Окружность (P)",
                                className: "r__site",
                            },
                            {
                                id: "res",
                                title: "Диаметр (d)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'circle_radius',
                method: circleRadius,
                calcTextContent: {
                    title: "Радиус круга",
                    body: "<p>\n" +
                        "                                    Радиус круга представляет собой равноудаленность всех точек\n" +
                        "                                    окружности от ее центра. Вне зависимости от размера\n" +
                        "                                    окружности, радиус представляет собой отношение длины\n" +
                        "                                    окружности к удвоенному числу π, приблизительно равному\n" +
                        "                                    3,14.\n" +
                        "                                    <br/>\n" +
                        "                                    <br/>\n" +
                        "                                    Радиус круга можно найти по формуле:\n" +
                        "                                </p>\n" +
                        "                                <div class=\"content__info-img\">\n" +
                        "                                    <img src=\"../img/radiuscircleformule.png\" alt=\"\"/>\n" +
                        "                                </div>\n" +
                        "                                <p>\n" +
                        "                                    где P — длина окружности круга.\n" +
                        "                                </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/radiuscircle.png",
                                alt: "Радиус круга"
                            },
                            {
                                src: "../img/radiuscircleformule.png",
                                alt: "Формула радиуса круга"
                            }
                        ],
                        navigation: [
                            {
                                id: "p",
                                title: "Окружность (P)",
                                className: "r__site",
                            },
                            {
                                id: "res",
                                title: "Радиус (r)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'circle_square',
            },
            {
                title: "Периметр",
                calcTitle: 'circle_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь круга",
                calcTitle: 'circle_square',
            },
            {
                title: "Периметр круга",
                calcTitle: 'circle_perimeter',
            },
            {
                title: "Диаметр круга",
                calcTitle: 'circle_diameter',
            },
            {
                title: "Радиус круга",
                calcTitle: 'circle_radius',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'circle_square',
            },
            {
                title: "Периметр",
                calcTitle: 'circle_perimeter',
            },
            {
                title: "Диаметр",
                calcTitle: 'circle_diameter',
            },
            {
                title: "Радиус",
                calcTitle: 'circle_radius',
            },
        ]
    }, {
        id: 5,
        infoTitle: "rhombus",
        className: "rhombus",
        title: "Ромб",
        body: "Параллелограмм, у которого все стороны равны.",
        content: [
            {
                mainContent: {
                    title: "Ромб",
                    body: "                    Ромб — это параллелограмм, который имеет равные стороны.\n" +
                        "                    Если у ромба все углы прямые, тогда он называется квадратом.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    Ромбы отличаются между собой размером стороны и размером\n" +
                        "                    углов.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Признаки ромба</b>\n" +
                        "                    <ol>\n" +
                        "                      <li>\n" +
                        "                        Две его смежные стороны равны (отсюда следует, что все\n" +
                        "                        стороны равны).\n" +
                        "                      </li>\n" +
                        "                      <li>Его диагонали пересекаются под прямым углом.</li>\n" +
                        "                      <li>\n" +
                        "                        Одна из диагоналей (биссектриса) делит содержащие её\n" +
                        "                        углы пополам.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        Если диагонали делят параллелограмм на четыре равных\n" +
                        "                        прямоугольных треугольника.\n" +
                        "                      </li>\n" +
                        "                      <li>Если в параллелограмм можно вписать круг.</li>\n" +
                        "                    </ol>\n" +
                        "                    <br />\n" +
                        "                    <b>Свойства ромба</b>\n" +
                        "                    <ol>\n" +
                        "                      <li>Имеет все свойства параллелограмма.</li>\n" +
                        "                      <li>Диагонали перпендикулярны.</li>\n" +
                        "                      <li>Диагонали являются биссектрисами его углов.</li>\n" +
                        "                      <li>\n" +
                        "                        Сумма квадратов диагоналей равна квадрату стороны\n" +
                        "                        умноженному на четыре.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        Точка пересечения диагоналей называется центром\n" +
                        "                        симметрии ромба.\n" +
                        "                      </li>\n" +
                        "                      <li>В любой ромб можно вписать окружность.</li>\n" +
                        "                      <li>\n" +
                        "                        Центром окружности вписанной в ромб будет точка\n" +
                        "                        пересечения его диагоналей.\n" +
                        "                      </li>\n" +
                        "                    </ol>"
                },
                secondContent: []
            }
        ],
        calcInfo: [
            {
                calcTitle: 'rhombus_square',
                method: rhombusSquare,
                calcTextContent: {
                    title: "Площадь ромба",
                    body: "<p>\n" +
                        "                      Так как ромб — это параллелограмм, у которого все стороны\n" +
                        "                      равны, то для него действуют все те же формулы, как и для\n" +
                        "                      параллелограмма, включая формулу нахождения площади через\n" +
                        "                      произведение высоты и стороны.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Для того чтобы найти площадь ромба, можно воспользоваться\n" +
                        "                      вот этой формулой:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/arearhombusformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — сторона ромба, h — высота.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/arearhombus.png",
                                alt: "Площадь ромба"
                            },
                            {
                                src: "../img/arearhombusformule.png",
                                alt: "Формула площади ромба"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "h",
                                title: "Высота (h)",
                                className: "h__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'rhombus_perimeter',
                method: rhombusPerimeter,
                calcTextContent: {
                    title: "Периметр ромба",
                    body: "<p>\n" +
                        "                      Так как ромб представляет собой геометрическую фигуру, у\n" +
                        "                      которой, как и у квадрата, все стороны равны, то формула\n" +
                        "                      периметра ромба идентична формуле периметра квадрата:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/perimetrrhombusformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — сторона ромба.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrrhombus.png",
                                alt: "Периметр ромба"
                            },
                            {
                                src: "../img/perimetrrhombusformule.png",
                                alt: "Формула периметра ромба"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "res",
                                title: "Периметр (P)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'rhombus_diagonal',
                method: rhombusDiagonal,
                calcTextContent: {
                    title: "Диагональ ромба",
                    body: "<p>\n" +
                        "                      Основное свойство диагоналей ромба то, что они пересекаются\n" +
                        "                      под прямым углом, деля внутреннее пространство фигуры на\n" +
                        "                      четыре абсолютно идентичных прямоугольных треугольника.\n" +
                        "                      Найти диагональ ромба, зная сторону и угол, можно через\n" +
                        "                      триногометрические отношения в одном их таких треугольников:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/diagonalrhombusformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — сторона ромба, α — угол.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/diagonalrhombus.png",
                                alt: "Диагональ ромба"
                            },
                            {
                                src: "../img/diagonalrhombusformule.png",
                                alt: "Формула диагонали ромба"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "angle",
                                title: "Угол (α)",
                                className: "angle__site"
                            },
                            {
                                id: "res",
                                title: "Диагональ (d)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'rhombus_square',
            },
            {
                title: "Периметр",
                calcTitle: 'rhombus_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь ромба",
                calcTitle: 'rhombus_square',
            },
            {
                title: "Периметр ромба",
                calcTitle: 'rhombus_perimeter',
            },
            {
                title: "Диагональ ромба",
                calcTitle: 'rhombus_diagonal',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'rhombus_square',
            },
            {
                title: "Периметр",
                calcTitle: 'rhombus_perimeter',
            },
            {
                title: "Диагональ",
                calcTitle: 'rhombus_diagonal',
            },
        ]
    }, {
        id: 6,
        infoTitle: "parallelogram",
        className: "parallelogram",
        title: "Параллелограмм",
        body: "Четырёхугольник, у которого противоположные стороны попарно параллельны, то есть лежат на параллельных прямых. Частными случаями параллелограмма являются прямоугольник, квадрат и ромб.",
        content: [
            {
                mainContent: {
                    title: "Параллелограмм",
                    body: "                    Параллелограмм — четырёхугольник, у которого противоположные\n" +
                        "                    стороны попарно параллельны, то есть лежат на параллельных\n" +
                        "                    прямых. Частными случаями параллелограмма являются\n" +
                        "                    прямоугольник, квадрат и ромб.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Признаки параллелограмма</b>\n" +
                        "                    <ol>\n" +
                        "                      <li>\n" +
                        "                        Две его противоположные стороны равны и параллельны.\n" +
                        "                      </li>\n" +
                        "                      <li>Противоположные стороны попарно равны.</li>\n" +
                        "                      <li>Противоположные углы попарно равны.</li>\n" +
                        "                      <li>Диагонали точкой пересечения делятся пополам.</li>\n" +
                        "                    </ol>\n" +
                        "                    <br />\n" +
                        "                    <b>Свойства параллелограмма</b>\n" +
                        "                    <ol>\n" +
                        "                      <li>Противолежащие стороны равны.</li>\n" +
                        "                      <li>Противоположные углы равны.</li>\n" +
                        "                      <li>Диагонали точкой пересечения делятся пополам.</li>\n" +
                        "                      <li>\n" +
                        "                        Сумма углов, прилежащих к одной стороне, равна 180°.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        Сумма квадратов диагоналей равна сумме квадратов всех\n" +
                        "                        сторон.\n" +
                        "                      </li>\n" +
                        "                    </ol>"
                },
                secondContent: []
            }
        ],
        calcInfo: [
            {
                calcTitle: 'parallelogram_square',
                method: parallelogramSquare,
                calcTextContent: {
                    title: "Площадь параллелограмма",
                    body: "<p>\n" +
                        "                      Первый способ вычисления площади параллелограмма связан с\n" +
                        "                      одной из самых простых фигур – прямоугольником.\n" +
                        "                      Доказательство: если провести в параллелограмме высоту h, то\n" +
                        "                      мы разделим его на две фигуры – треугольник и трапецию:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/areaparallelogramformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где b — основание, h — высота.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/areaparallelogram.png",
                                alt: "Площадь параллелограмма"
                            },
                            {
                                src: "../img/areaparallelogramformule.png",
                                alt: "Формула площади параллелограмма"
                            }
                        ],
                        navigation: [
                            {
                                id: "b",
                                title: "Основание (b)",
                                className: "b__site",
                            },
                            {
                                id: "h",
                                title: "Высота (h)",
                                className: "h__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'parallelogram_perimeter',
                method: parallelogramPerimeter,
                calcTextContent: {
                    title: "Периметр параллелограмма",
                    body: "<p>\n" +
                        "                      Параллелограмм – это четырехугольник, у которого стороны\n" +
                        "                      попарно параллельны, и соответственно, равны друг другу.\n" +
                        "                      Поэтому формула периметра параллелограмма выглядит также как\n" +
                        "                      и формула периметра прямоугольника, по причине того что\n" +
                        "                      одинаковые стороны приводятся в качестве подобных слагаемых:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/perimetrparallelogramformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — сторона, b — основание.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrparallelogram.png",
                                alt: "Периметр параллелограмма"
                            },
                            {
                                src: "../img/perimetrparallelogramformule.png",
                                alt: "Формула периметра параллелограмма"
                            }
                        ],
                        navigation: [
                            {
                                id: "b",
                                title: "Основание (b)",
                                className: "b__site",
                            },
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "res",
                                title: "Периметр (P)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'parallelogram_diagonal',
                method: parallelogramDiagonal,
                calcTextContent: {
                    title: "Диагональ параллелограмма",
                    body: "<p>\n" +
                        "                      Согласно теореме косинусов, сторона треугольника во второй\n" +
                        "                      степени равна сумме квадратов двух других его сторон и их\n" +
                        "                      удвоенному произведению на косинус угла между ними. Так как\n" +
                        "                      любая диагональ параллелограмма делит его на два\n" +
                        "                      конгруэнтных треугольника, то вычислить диагональ можно,\n" +
                        "                      зная стороны параллелограмма и угол между ними. Нужно\n" +
                        "                      учитывать, что угол и диагональ должны находиться в одном и\n" +
                        "                      том же треугольнике, иначе нужно рассчитать необходимый\n" +
                        "                      угол, отняв известный из 180 градусов по принципу\n" +
                        "                      дополнительных углов. Применяя для параллелограмма теорему\n" +
                        "                      косинусов, получаем следующее выражение:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/diagonalparallelogramformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — сторона, b — основание и α — угол.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/diagonalparallelogram.png",
                                alt: "Диагональ параллелограмма"
                            },
                            {
                                src: "../img/diagonalparallelogramformule.png",
                                alt: "Формула диагонали параллелограмма"
                            }
                        ],
                        navigation: [
                            {
                                id: "b",
                                title: "Основание (b)",
                                className: "b__site",
                            },
                            {
                                id: "a",
                                title: "Сторона (а)",
                                className: "a__site",
                            },
                            {
                                id: "angle",
                                title: "Угол (α)",
                                className: "angle__site",
                            },
                            {
                                id: "res",
                                title: "Диагональ (d)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'parallelogram_square',
            },
            {
                title: "Периметр",
                calcTitle: 'parallelogram_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь параллелограмма",
                calcTitle: 'parallelogram_square',
            },
            {
                title: "Периметр параллелограмма",
                calcTitle: 'parallelogram_perimeter',
            },
            {
                title: "Диагональ параллелограмма",
                calcTitle: 'parallelogram_diagonal',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'parallelogram_square',
            },
            {
                title: "Периметр",
                calcTitle: 'parallelogram_perimeter',
            },
            {
                title: "Диагональ",
                calcTitle: 'parallelogram_diagonal',
            },
        ]
    }, {
        id: 7,
        infoTitle: "trapezoid",
        className: "trapezoid",
        title: "Трапеция",
        body: "Выпуклый четырёхугольник, у которого две стороны параллельны, а две другие стороны не параллельны. Иногда в определении трапеции опускают последнее условие. Параллельные противоположные стороны называются основаниями трапеции, а две другие — боковыми сторонами.",
        content: [
            {
                mainContent: {
                    title: "Трапеция",
                    body: "                    Трапеция — четырехугольник, у которого две стороны\n" +
                        "                    параллельны, а две стороны не параллельны. Параллельные\n" +
                        "                    стороны называются основаниями трапеции, две другие —\n" +
                        "                    боковыми сторонами.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Высота трапеции</b> — расстояние между прямыми, на\n" +
                        "                    которых лежат основания трапеции, любой общий перпендикуляр\n" +
                        "                    этих прямых.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Средняя линия трапеции</b> — отрезок, соединяющий\n" +
                        "                    середины боковых сторон.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    <b>Свойства трапеции</b>\n" +
                        "                    <ol>\n" +
                        "                      <li>\n" +
                        "                        Если в трапецию вписана окружность, то сумма оснований\n" +
                        "                        равна сумме боковых сторон, а средняя линия — полусумме\n" +
                        "                        боковых сторон.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        <b>Равнобедренная трапеция</b> — трапеция, у которой\n" +
                        "                        боковые стороны равны. Тогда равны диагонали и углы при\n" +
                        "                        основании.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        Из всех трапеций только около равнобедренной трапеции\n" +
                        "                        можно описать окружность, так как окружность можно\n" +
                        "                        описать около четырехугольника, только если сумма\n" +
                        "                        противоположных углов равна 180 градусов.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        В равнобедренной трапеции расстояние от вершины одного\n" +
                        "                        основания, до проекции противоположной вершины на\n" +
                        "                        прямую, содержащую это основание равно средней линии.\n" +
                        "                      </li>\n" +
                        "                      <li>\n" +
                        "                        Прямоугольная трапеция — трапеция, у которой один из\n" +
                        "                        углов при основании равен 90 градусов.\n" +
                        "                      </li>\n" +
                        "                    </ol>"
                },
                secondContent: []
            }
        ],
        calcInfo: [
            {
                calcTitle: 'trapezoid_square',
                method: trapezoidSquare,
                calcTextContent: {
                    title: "Площадь трапеции",
                    body: "<p>\n" +
                        "                      Площадь трапеции в самом простом виде – это произведение\n" +
                        "                      средней линии на высоту, или если раскрыть формулу средней\n" +
                        "                      линии, то произведение полусуммы оснований на высоту:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/areatrapezoidformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где b и c — основания трапеции, а h — высота.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Доказательством этой формулы будет служить представление\n" +
                        "                      площади трапеции, как суммы площадей двух треугольников\n" +
                        "                      полученных при проведении диагонали.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/areatrapezoid.png",
                                alt: "Площадь трапеции"
                            },
                            {
                                src: "../img/areatrapezoidformule.png",
                                alt: "Формула площади трапеции"
                            }
                        ],
                        navigation: [
                            {
                                id: "b",
                                title: "Основание (b)",
                                className: "b__site",
                            },
                            {
                                id: "c",
                                title: "Основание (c)",
                                className: "c__site",
                            },
                            {
                                id: "h",
                                title: "Высота (h)",
                                className: "h__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'trapezoid_perimeter',
                method: trapezoidPerimeter,
                calcTextContent: {
                    title: "Периметр трапеции",
                    body: "<p>\n" +
                        "                      Так как трапеция – это четырехугольника, у которого все\n" +
                        "                      стороны могут быть совершенно разными по длине, то вычислить\n" +
                        "                      периметр трапеции можно по формуле периметра\n" +
                        "                      четырехугольника:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/perimetrtrapezoidformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a, b, c и d — стороны трапеции.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrtrapezoid.png",
                                alt: "Периметр трапеции"
                            },
                            {
                                src: "../img/perimetrtrapezoidformule.png",
                                alt: "Формула периметра трапеции"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (a)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site",
                            },
                            {
                                id: "c",
                                title: "Сторона (c)",
                                className: "c__site",
                            },
                            {
                                id: "d",
                                title: "Сторона (d)",
                                className: "d__site",
                            },
                            {
                                id: "res",
                                title: "Периметр (P)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'trapezoid_diagonal',
                method: trapezoidDiagonal,
                calcTextContent: {
                    title: "Диагональ трапеции",
                    body: "<p>\n" +
                        "                      Можно вычислить диагональ трапеции через стороны. Для этого\n" +
                        "                      необходимо знать все четыре стороны. Выведение этой формулы\n" +
                        "                      основано на параллельности оснований трапеции, и\n" +
                        "                      прямоугольными треугольниками, которые образует высота,\n" +
                        "                      проведенная из вершин верхнего основания:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/diagonaltrapezoidformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a, b, c и d — стороны трапеции.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/diagonaltrapezoid.png",
                                alt: "Диагональ трапеции"
                            },
                            {
                                src: "../img/diagonaltrapezoidformule.png",
                                alt: "Формула диагонали трапеции"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (a)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site",
                            },
                            {
                                id: "c",
                                title: "Сторона (c)",
                                className: "c__site",
                            },
                            {
                                id: "d",
                                title: "Сторона (d)",
                                className: "d__site",
                            },
                            {
                                id: "d1",
                                title: "Диагональ (d1)",
                                className: "calc__result",
                            },
                            {
                                id: "d2",
                                title: "Диагональ (d2)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'trapezoid_inradius',
                method: trapezoidInRadius,
                calcTextContent: {
                    title: "Радиус вписанной окружности в трапецию",
                    body: "<p>\n" +
                        "                      Трапеция является несколько нестандартной фигурой среди\n" +
                        "                      четырехугольников. Она не является правильным\n" +
                        "                      многоугольником, однако обладает рядом отличительных\n" +
                        "                      свойств, среди которых – возможность вписать в равнобокую\n" +
                        "                      трапецию окружность. Это обусловлено тем, что для\n" +
                        "                      четырехугольников действует правило, согласно которому в\n" +
                        "                      него можно вписать окружность, если суммы его\n" +
                        "                      противоположных сторон равны. Не каждая трапеция соблюдает\n" +
                        "                      это правило, но если в нее все-таки вписана окружность,\n" +
                        "                      значит, сумма ее оснований равна сумме боковых сторон.\n" +
                        "                      Поскольку радиусы окружности, опущенные на основания\n" +
                        "                      трапеции, находятся по отношению к ним под прямым углом,\n" +
                        "                      следовательно, они совпадают с высотой трапеции.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Следовательно, не зная высоты, можно вычислить радиус\n" +
                        "                      окружности, вписанной в трапецию, через основания:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/inradiustrapezoidformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a, b — основания трапеции.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/inradiustrapezoid.png",
                                alt: "Радиус вписанной окружности в трапецию"
                            },
                            {
                                src: "../img/inradiustrapezoidformule.png",
                                alt: "Формула вписанного радиуса трапеции"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Сторона (a)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Сторона (b)",
                                className: "b__site",
                            },
                            {
                                id: "res",
                                title: "Радиус (r)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'trapezoid_square',
            },
            {
                title: "Периметр",
                calcTitle: 'trapezoid_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь трапеции",
                calcTitle: 'trapezoid_square',
            },
            {
                title: "Периметр трапеции",
                calcTitle: 'trapezoid_perimeter',
            },
            {
                title: "Диагональ трапеции",
                calcTitle: 'trapezoid_diagonal',
            },
            {
                title: "Радиус вписанной окружности в трапецию",
                calcTitle: 'trapezoid_inradius',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'trapezoid_square',
            },
            {
                title: "Периметр",
                calcTitle: 'trapezoid_perimeter',
            },
            {
                title: "Диагональ",
                calcTitle: 'trapezoid_diagonal',
            },
            {
                title: "Радиус вписанной окружности в трапецию",
                calcTitle: 'trapezoid_inradius',
            },
        ]
    }, {
        id: 8,
        infoTitle: "ellipse",
        className: "ellipse",
        title: "Эллипс",
        body: "замкнутая кривая на плоскости, которая может быть получена как пересечение плоскости и кругового цилиндра или как ортогональная проекция окружности на плоскость. Окружность является частным случаем эллипса.",
        content: [
            {
                mainContent: {
                    title: "Эллипс",
                    body: "                    Эллипс — это замкнутая плоская кривая, сумма расстояний от\n" +
                        "                    каждой точки которой до двух точек F1 и F2 равна постоянной\n" +
                        "                    величине. Точки F1 и F2 называют фокусами эллипса."
                },
                secondContent: [
                    {
                        title: "Свойства эллипса",
                        body: "<ol>\n" +
                            "                      <li>\n" +
                            "                        Угол между касательной к эллипсу и фокальным радиусом r1\n" +
                            "                        равен углу между касательной и фокальным радиусом r2.\n" +
                            "                      </li>\n" +
                            "                      <li>\n" +
                            "                        Если эллипс пересекается двумя параллельными прямыми, то\n" +
                            "                        отрезок, соединяющий середины отрезков образовавшихся\n" +
                            "                        при пересечении прямых и эллипса, всегда будет проходить\n" +
                            "                        через центр эллипсa. (Это свойство дает возможность\n" +
                            "                        построением с помощью циркуля и линейки получить центр\n" +
                            "                        эллипса.)\n" +
                            "                      </li>\n" +
                            "                      <li>\n" +
                            "                        Эволютой эллипсa есть астероида, что растянута вдоль\n" +
                            "                        короткой оси.\n" +
                            "                      </li>\n" +
                            "                      <li>Диагонали точкой пересечения делятся пополам.</li>\n" +
                            "                    </ol>"
                    },
                ]
            }
        ],
        calcInfo: [
            {
                calcTitle: 'ellipse_square',
                method: ellipseSquare,
                calcTextContent: {
                    title: "Площадь эллипса",
                    body: "<p>\n" +
                        "                      Эллипс представляет собой ортогональную проекцию окружности\n" +
                        "                      на плоскость или сечение цилиндра. Поскольку в участии при\n" +
                        "                      графическом создании эллипса задействованы два радиуса\n" +
                        "                      окружностей – малый и большой, или как их еще называют для\n" +
                        "                      эллипса – малая и большая полуоси, то естественно они\n" +
                        "                      участвуют и при подсчете площади. Их произведение вместе с\n" +
                        "                      числом π дает площадь эллипса.\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/areaellipseformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — малая полуось, а b — большая полуось.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/areaellipse.png",
                                alt: "Площадь эллипса"
                            },
                            {
                                src: "../img/areaellipseformule.png",
                                alt: "Формула площади эллипса"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Полуось (а)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Полуось (b)",
                                className: "b__site",
                            },
                            {
                                id: "res",
                                title: "Площадь (S)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            },
            {
                calcTitle: 'ellipse_perimeter',
                method: ellipsePerimeter,
                calcTextContent: {
                    title: "Периметр эллипса",
                    body: "<p>\n" +
                        "                      Эллипс — замкнутая кривая на плоскости, которая может быть\n" +
                        "                      получена как пересечение плоскости и кругового цилиндра или\n" +
                        "                      как ортогональная проекция окружности на плоскость.\n" +
                        "                      Окружность является частным случаем эллипса.\n" +
                        "                      <br />\n" +
                        "                      <br />\n" +
                        "                      Приближённая формула для нахождения периметра эллипса:\n" +
                        "                    </p>\n" +
                        "                    <div class=\"content__info-img\">\n" +
                        "                      <img src=\"../img/perimetrellipseformule.png\" alt=\"\" />\n" +
                        "                    </div>\n" +
                        "                    <p>\n" +
                        "                      где a — большая полуось, а b — малая полуось.\n" +
                        "                    </p>"
                },
                calcFixedContent: [
                    {
                        img: [
                            {
                                src: "../img/perimetrellipse.png",
                                alt: "Периметр эллипса"
                            },
                            {
                                src: "../img/perimetrellipseformule.png",
                                alt: "Формула периметр эллипса"
                            }
                        ],
                        navigation: [
                            {
                                id: "a",
                                title: "Полуось (а)",
                                className: "a__site",
                            },
                            {
                                id: "b",
                                title: "Полуось (b)",
                                className: "b__site",
                            },
                            {
                                id: "res",
                                title: "Периметр (P)",
                                className: "calc__result",
                            },
                        ]
                    }
                ]
            }
        ],
        linksSlider: [
            {
                title: "Площадь",
                calcTitle: 'ellipse_square',
            },
            {
                title: "Периметр",
                calcTitle: 'ellipse_perimeter',
            },
            {
                title: "Еще",
            }],
        searchLinks: [
            {
                title: "Площадь эллипса",
                calcTitle: 'ellipse_square',
            },
            {
                title: "Периметр эллипса",
                calcTitle: 'ellipse_perimeter',
            },
        ],
        allLinks: [
            {
                title: "Площадь",
                calcTitle: 'ellipse_square',
            },
            {
                title: "Периметр",
                calcTitle: 'ellipse_perimeter',
            },
        ]
    },
];