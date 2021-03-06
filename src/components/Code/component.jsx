import Element from './index';
import BaseComponent from '../base-component';

class Code extends BaseComponent {
    constructor(props) {
        super(props);
        this.elementClass = Element;
    }

    render() {
        return super.render();
    }
}

Code.propTypes = {};

Code.defaultProps = {
    text: 'console.log("hello world");'
};

export default Code;
