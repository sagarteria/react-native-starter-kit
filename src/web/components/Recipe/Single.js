import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { errorMessages } from '../../../constants/messages';
import Loading from '../UI/Loading';
import Error from '../UI/Error';

const RecipeView = ({
  error, loading, recipes, recipeId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all recipes
  let recipe = null;
  if (recipeId && recipes) {
    recipe = recipes.find(item => parseInt(item.id, 10) === parseInt(recipeId, 10));
  }

  // Recipe not found
  if (!recipe) return <Error content={errorMessages.recipe404} />;

  // Build Ingredients listing
  const ingredients = recipe.ingredients.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));

  // Build Method listing
  const method = recipe.method.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));

  const dataPieChart = [
    {
      "id": "sass",
      "label": "sass",
      "value": 440,
      "color": "hsl(269, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 573,
      "color": "hsl(16, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 530,
      "color": "hsl(81, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 317,
      "color": "hsl(120, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 503,
      "color": "hsl(234, 70%, 50%)"
    }
  ];


  const dataHeatmap = [
    {
      "country": "January",
      "Digital Life Design": 79,
      "Digital Geospatial Intelligence": "hsl(205, 70%, 50%)",
      "Cisco Live": 46,
      "burgerColor": "hsl(153, 70%, 50%)",
      "AdExchangers Industry": 6,
      "sandwichColor": "hsl(145, 70%, 50%)",
      "Deep Learning Summit": 20,
      "kebabColor": "hsl(197, 70%, 50%)",
      "East Meets West": 8,
      "friesColor": "hsl(205, 70%, 50%)",
      "Upfront Summit": 53,
      "donutColor": "hsl(59, 70%, 50%)",
      "dotSwit": 2,
      "junkColor": "hsl(57, 70%, 50%)",
      "Pause Fest": 70,
      "sushiColor": "hsl(295, 70%, 50%)",
      "Microsoft Ignite": 49,
      "ramenColor": "hsl(179, 70%, 50%)",
      "Future Stores Miami": 43,
      "curryColor": "hsl(31, 70%, 50%)",
      "STEP Conference": 27,
      "udonColor": "hsl(118, 70%, 50%)"
    },
    {
      "country": "February",
      "Digital Life Design": 72,
      "Digital Geospatial Intelligence": "hsl(11, 70%, 50%)",
      "Cisco Live": 86,
      "burgerColor": "hsl(92, 70%, 50%)",
      "AdExchangers Industry": 74,
      "sandwichColor": "hsl(153, 70%, 50%)",
      "Deep Learning Summit": 97,
      "kebabColor": "hsl(124, 70%, 50%)",
      "East Meets West": 73,
      "friesColor": "hsl(215, 70%, 50%)",
      "Upfront Summit": 78,
      "donutColor": "hsl(250, 70%, 50%)",
      "dotSwit": 18,
      "junkColor": "hsl(141, 70%, 50%)",
      "Pause Fest": 72,
      "sushiColor": "hsl(341, 70%, 50%)",
      "Microsoft Ignite": 100,
      "ramenColor": "hsl(261, 70%, 50%)",
      "Future Stores Miami": 3,
      "curryColor": "hsl(42, 70%, 50%)",
      "STEP Conference": 90,
      "udonColor": "hsl(305, 70%, 50%)"
    },
    {
      "country": "March",
      "Digital Life Design": 78,
      "Digital Geospatial Intelligence": "hsl(326, 70%, 50%)",
      "Cisco Live": 31,
      "burgerColor": "hsl(168, 70%, 50%)",
      "AdExchangers Industry": 11,
      "sandwichColor": "hsl(344, 70%, 50%)",
      "Deep Learning Summit": 23,
      "kebabColor": "hsl(121, 70%, 50%)",
      "East Meets West": 48,
      "friesColor": "hsl(307, 70%, 50%)",
      "Upfront Summit": 100,
      "donutColor": "hsl(283, 70%, 50%)",
      "dotSwit": 15,
      "junkColor": "hsl(175, 70%, 50%)",
      "Pause Fest": 69,
      "sushiColor": "hsl(217, 70%, 50%)",
      "Microsoft Ignite": 77,
      "ramenColor": "hsl(80, 70%, 50%)",
      "Future Stores Miami": 32,
      "curryColor": "hsl(261, 70%, 50%)",
      "STEP Conference": 39,
      "udonColor": "hsl(318, 70%, 50%)"
    },
    {
      "country": "April",
      "Digital Life Design": 17,
      "Digital Geospatial Intelligence": "hsl(80, 70%, 50%)",
      "Cisco Live": 24,
      "burgerColor": "hsl(8, 70%, 50%)",
      "AdExchangers Industry": 15,
      "sandwichColor": "hsl(280, 70%, 50%)",
      "Deep Learning Summit": 12,
      "kebabColor": "hsl(233, 70%, 50%)",
      "East Meets West": 44,
      "friesColor": "hsl(273, 70%, 50%)",
      "Upfront Summit": 47,
      "donutColor": "hsl(142, 70%, 50%)",
      "dotSwit": 63,
      "junkColor": "hsl(142, 70%, 50%)",
      "Pause Fest": 25,
      "sushiColor": "hsl(34, 70%, 50%)",
      "Microsoft Ignite": 25,
      "ramenColor": "hsl(244, 70%, 50%)",
      "Future Stores Miami": 89,
      "curryColor": "hsl(14, 70%, 50%)",
      "STEP Conference": 77,
      "udonColor": "hsl(109, 70%, 50%)"
    },
    {
      "country": "May",
      "Digital Life Design": 24,
      "Digital Geospatial Intelligence": "hsl(222, 70%, 50%)",
      "Cisco Live": 62,
      "burgerColor": "hsl(260, 70%, 50%)",
      "AdExchangers Industry": 50,
      "sandwichColor": "hsl(268, 70%, 50%)",
      "Deep Learning Summit": 64,
      "kebabColor": "hsl(3, 70%, 50%)",
      "East Meets West": 12,
      "friesColor": "hsl(324, 70%, 50%)",
      "Upfront Summit": 56,
      "donutColor": "hsl(318, 70%, 50%)",
      "dotSwit": 50,
      "junkColor": "hsl(88, 70%, 50%)",
      "Pause Fest": 12,
      "sushiColor": "hsl(219, 70%, 50%)",
      "Microsoft Ignite": 72,
      "ramenColor": "hsl(307, 70%, 50%)",
      "Future Stores Miami": 24,
      "curryColor": "hsl(70, 70%, 50%)",
      "STEP Conference": 11,
      "udonColor": "hsl(293, 70%, 50%)"
    },
    {
      "country": "June",
      "Digital Life Design": 41,
      "Digital Geospatial Intelligence": "hsl(307, 70%, 50%)",
      "Cisco Live": 26,
      "burgerColor": "hsl(311, 70%, 50%)",
      "AdExchangers Industry": 92,
      "sandwichColor": "hsl(6, 70%, 50%)",
      "Deep Learning Summit": 96,
      "kebabColor": "hsl(223, 70%, 50%)",
      "East Meets West": 83,
      "friesColor": "hsl(64, 70%, 50%)",
      "Upfront Summit": 22,
      "donutColor": "hsl(358, 70%, 50%)",
      "dotSwit": 1,
      "junkColor": "hsl(358, 70%, 50%)",
      "Pause Fest": 7,
      "sushiColor": "hsl(83, 70%, 50%)",
      "Microsoft Ignite": 87,
      "ramenColor": "hsl(270, 70%, 50%)",
      "Future Stores Miami": 55,
      "curryColor": "hsl(47, 70%, 50%)",
      "STEP Conference": 67,
      "udonColor": "hsl(310, 70%, 50%)"
    },
    {
      "country": "July",
      "Digital Life Design": 9,
      "Digital Geospatial Intelligence": "hsl(254, 70%, 50%)",
      "Cisco Live": 30,
      "burgerColor": "hsl(15, 70%, 50%)",
      "AdExchangers Industry": 95,
      "sandwichColor": "hsl(3, 70%, 50%)",
      "Deep Learning Summit": 76,
      "kebabColor": "hsl(219, 70%, 50%)",
      "East Meets West": 3,
      "friesColor": "hsl(10, 70%, 50%)",
      "Upfront Summit": 57,
      "donutColor": "hsl(169, 70%, 50%)",
      "dotSwit": 90,
      "junkColor": "hsl(304, 70%, 50%)",
      "Pause Fest": 56,
      "sushiColor": "hsl(93, 70%, 50%)",
      "Microsoft Ignite": 73,
      "ramenColor": "hsl(83, 70%, 50%)",
      "Future Stores Miami": 38,
      "curryColor": "hsl(93, 70%, 50%)",
      "STEP Conference": 78,
      "udonColor": "hsl(228, 70%, 50%)"
    },
    {
      "country": "August",
      "Digital Life Design": 42,
      "Digital Geospatial Intelligence": "hsl(9, 70%, 50%)",
      "Cisco Live": 9,
      "burgerColor": "hsl(191, 70%, 50%)",
      "AdExchangers Industry": 35,
      "sandwichColor": "hsl(353, 70%, 50%)",
      "Deep Learning Summit": 100,
      "kebabColor": "hsl(166, 70%, 50%)",
      "East Meets West": 49,
      "friesColor": "hsl(272, 70%, 50%)",
      "Upfront Summit": 82,
      "donutColor": "hsl(253, 70%, 50%)",
      "dotSwit": 66,
      "junkColor": "hsl(200, 70%, 50%)",
      "Pause Fest": 6,
      "sushiColor": "hsl(271, 70%, 50%)",
      "Microsoft Ignite": 24,
      "ramenColor": "hsl(224, 70%, 50%)",
      "Future Stores Miami": 100,
      "curryColor": "hsl(269, 70%, 50%)",
      "STEP Conference": 65,
      "udonColor": "hsl(155, 70%, 50%)"
    },
    {
      "country": "September",
      "Digital Life Design": 27,
      "Digital Geospatial Intelligence": "hsl(129, 70%, 50%)",
      "Cisco Live": 62,
      "burgerColor": "hsl(349, 70%, 50%)",
      "AdExchangers Industry": 63,
      "sandwichColor": "hsl(87, 70%, 50%)",
      "Deep Learning Summit": 89,
      "kebabColor": "hsl(228, 70%, 50%)",
      "East Meets West": 33,
      "friesColor": "hsl(244, 70%, 50%)",
      "Upfront Summit": 98,
      "donutColor": "hsl(345, 70%, 50%)",
      "dotSwit": 46,
      "junkColor": "hsl(128, 70%, 50%)",
      "Pause Fest": 6,
      "sushiColor": "hsl(44, 70%, 50%)",
      "Microsoft Ignite": 78,
      "ramenColor": "hsl(344, 70%, 50%)",
      "Future Stores Miami": 26,
      "curryColor": "hsl(330, 70%, 50%)",
      "STEP Conference": 22,
      "udonColor": "hsl(29, 70%, 50%)"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{recipe.title}</title>
      </Helmet>

      <Row className="pt-4 pt-sm-0">
        <Col sm="12">
          <h1>{recipe.title}</h1>
          <p>
            Employee
            {' '}
            {recipe.author}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="recipe-view-card">
          <Card>
            <CardHeader>Technical Skills Breakup</CardHeader>
            <CardBody>
              {/*<CardText>{recipe.body}</CardText>*/}
              <div style={{ 'height': 350, 'width': 300}}>
              <ResponsivePie
                data={dataPieChart}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                  {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                  },
                  {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                  }
                ]}
                fill={[
                  {
                    match: {
                      id: 'ruby'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'c'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'go'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'python'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'scala'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'lisp'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'elixir'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'javascript'
                    },
                    id: 'lines'
                  }
                ]}
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000'
                        }
                      }
                    ]
                  }
                ]}
              />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" className="recipe-view-card">
          <Card>
            <CardHeader>Global Technical Collaboration Score</CardHeader>
            <CardBody>
              {/*<CardText>{recipe.body}</CardText>*/}
              <div style={{ 'height': 350, 'width': 350}}>
                <ResponsiveHeatMap
                  data={dataHeatmap}
                  keys={[
                    'Digital Life Design',
                    'Cisco Live',
                    'AdExchangers Industry',
                    'Deep Learning Summit',
                    'East Meets West',
                    'Upfront Summit',
                    'dotSwit',
                    'Pause Fest',
                    'Microsoft Ignite',
                    'Future Stores Miami',
                    'STEP Conference'
                  ]}
                  indexBy="country"
                  margin={{ top: 130, right: 60, bottom: 60, left: 60 }}
                  forceSquare={true}
                  axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
                  axisRight={null}
                  axisBottom={null}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendPosition: 'middle',
                    legendOffset: -60
                  }}
                  cellOpacity={1}
                  cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
                  labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
                  defs={[
                    {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(0, 0, 0, 0.1)',
                      rotation: -45,
                      lineWidth: 4,
                      spacing: 7
                    }
                  ]}
                  fill={[ { id: 'lines' } ]}
                  animate={true}
                  motionStiffness={80}
                  motionDamping={9}
                  hoverTarget="cell"
                  cellHoverOthersOpacity={0.25}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="pt-5 pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/recipes">
            <i className="icon-arrow-left" />
            {' '}
            Back
          </Link>
        </Col>
      </Row>
    </div>
  );
};

RecipeView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recipeId: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};

export default RecipeView;
