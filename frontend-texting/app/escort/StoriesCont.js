import React from 'react'
import Story from './Story'

const StoriesCont = () => {
    return (
        <div className="supertopv-stories-container">
            <div class="sduko-stories-list">
                <div id="stories-right-button" style={{visibility:'hidden'}}>
                    <a href="#"></a>
                </div>

                <div id="outer">
                    <div id="inner">
                        <Story />
                        {/* <Story /> */}
                        {/* <Story /> */}
                    </div>
                </div>

                <div id="stories-left-button">
                        <a href="#"></a>
                    </div>
            </div>

        </div>
    )
}

export default StoriesCont