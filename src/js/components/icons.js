import React from 'react';

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_COLOR = '#000000';

export class CircleMinus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
                </svg>
            </span>
        );
    }
}

export class CirclePlus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                </svg>
            </span>
        );
    }
}

export class SquareMinus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;
        const svgStyle = getIconStyle(style).style;

        return (
            <span {...rest}>
                <svg fill={svgStyle.color}
                    width={svgStyle.height} height={svgStyle.width}
                    style={svgStyle}
                    viewBox="0 0 1792 1792">
                    <path d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/>
                </svg>
            </span>
        );
    }
}

export class SquarePlus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;
        const svgStyle = getIconStyle(style).style;

        return (
            <span {...rest}>
                <svg fill={svgStyle.color}
                    width={svgStyle.height} height={svgStyle.width}
                    style={svgStyle}
                    viewBox="0 0 1792 1792">
                    <path d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/>
                </svg>
            </span>
        );
    }
}

export class ArrowRight extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg
                    style={{...getIconStyle(style).style, paddingLeft: '2px', verticalAlign: 'top'}}
                    viewBox="0 0 15 15"
                    fill="currentColor"
                >
                    <path d="M0 14l6-6-6-6z"></path>
                </svg>
            </span>
        );
    }
}

export class ArrowDown extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg
                    style={{...getIconStyle(style).style, paddingLeft: '2px', verticalAlign: 'top'}}
                    viewBox="0 0 15 15"
                    fill="currentColor"
                >
                    <path d="M0 5l6 6 6-6z"></path>
                </svg>
            </span>
        );
    }
}

export class Clippy extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class ClippyPath extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path stroke="null" id="svg_2" d="m28.81214,0.67051s-4.98536,-0.01026 -10.05994,1.05738c-2.53627,0.53433 -5.11458,1.323 -7.20267,2.6419c-2.08809,1.3189 -3.76184,3.38442 -3.76184,6.04376c0,3.48698 2.73625,5.93812 5.00997,8.46516c2.27372,2.52601 4.22027,5.01407 4.22027,7.94416c0,1.66657 -0.57433,2.84086 -1.51479,3.86029c-0.94046,1.0184 -2.28705,1.82554 -3.6921,2.41115c-2.80702,1.17019 -5.68993,1.42556 -5.68993,1.42556a1.53837,1.53837 0 1 0 0.2564,3.06649s3.27058,-0.25742 6.61603,-1.65119c1.67273,-0.6974 3.40288,-1.68401 4.76896,-3.16495a8.67643,8.67643 0 0 0 2.33218,-5.94735c0,-4.24899 -2.66857,-7.40163 -5.00997,-10.00353s-4.22027,-4.76486 -4.22027,-6.40579c0,-1.44197 0.76201,-2.45422 2.32807,-3.44288c1.44402,-0.91277 3.5239,-1.59581 5.6684,-2.08604c-1.05122,1.15993 -1.84297,2.67882 -1.84297,4.50333c0,2.56396 1.31275,4.69307 3.00906,6.40989c1.69529,1.71683 3.81722,3.14239 5.86633,4.54128c2.05014,1.3989 4.02644,2.77112 5.40687,4.18643c1.37838,1.4153 2.12706,2.75882 2.12706,4.34847c0,1.42864 -0.46767,2.42858 -1.22557,3.30135c-0.75893,0.87175 -1.84913,1.5753 -2.9947,2.09116c-2.29218,1.03071 -4.64897,1.28198 -4.64897,1.28198a1.53837,1.53837 0 1 0 0.30357,3.06034s2.77112,-0.26152 5.60686,-1.53837c1.41838,-0.63791 2.89214,-1.53735 4.05618,-2.87573a8.03647,8.03647 0 0 0 1.97937,-5.32072c0,-2.59472 -1.30352,-4.75563 -3.00086,-6.49604c-1.69631,-1.74041 -3.82235,-3.17828 -5.87454,-4.57923c-2.05322,-1.40095 -4.03362,-2.76497 -5.41508,-4.16182c-1.38043,-1.39787 -2.11885,-2.71062 -2.11885,-4.24899c0,-1.11071 0.40818,-1.88707 1.15173,-2.62959c0.74355,-0.74457 1.85015,-1.37531 3.00906,-1.83887c2.31782,-0.92713 4.70845,-1.17942 4.70845,-1.17942a1.53837,1.53837 0 0 0 -0.15179,-3.06957zm4.97818,3.087a2.72395,2.72395 0 0 0 -2.34448,1.60401a1.51991,1.51991 0 0 0 -0.06359,0.16409l-1.84605,5.51251a2.89419,2.89419 0 0 0 0.21947,2.69831a2.72908,2.72908 0 0 0 2.30756,1.28198l0.33844,0l0,2.57421a1.53837,1.53837 0 1 0 3.07675,0l0,-2.57421l0.31691,0a2.72805,2.72805 0 0 0 2.30551,-1.28403a2.89214,2.89214 0 0 0 0.22563,-2.69626l-1.84605,-5.51251a1.51376,1.51376 0 0 0 -0.06461,-0.16409a2.72395,2.72395 0 0 0 -2.62549,-1.60401zm-27.68971,13.33258a2.72395,2.72395 0 0 0 -2.34346,1.60401a1.51991,1.51991 0 0 0 -0.06359,0.16409l-1.84707,5.51353a2.89419,2.89419 0 0 0 0.2205,2.69831a2.72908,2.72908 0 0 0 2.30756,1.28198l0.33639,0l0,2.57421a1.53837,1.53837 0 1 0 3.07675,0l0,-2.57421l0.31793,0a2.72805,2.72805 0 0 0 2.30654,-1.28403a2.89214,2.89214 0 0 0 0.21947,-2.69626l-1.8399,-5.51251a1.51376,1.51376 0 0 0 -0.06461,-0.16409a2.72395,2.72395 0 0 0 -2.62549,-1.60401l-0.00103,-0.00103z"/>
                    </g>
                </svg>
            </span>
        );
    }
}

export class RemoveCircle extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class AddCircle extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class Add extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class Edit extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class CheckCircle extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>
        );
    }
}


function getIconStyle(style) {
    if (!style) {
        style = {};
    }
    return {style:{
        verticalAlign: 'middle',
        ...style,
        color: style.color ? style.color : DEFAULT_COLOR,
        height: '1em',
        width: '1em'
    }};
}
