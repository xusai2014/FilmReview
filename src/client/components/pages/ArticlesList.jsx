import React from 'react';
import { connect } from 'react-redux';
import {PageHeader} from '../modules/Header'


class ArticlesList extends React.Component{
    render(){
        return( <div>
                <PageHeader />
                <div className="container">
                    <div className="row ">
                        <div className="input-group searchWidth">
                            <div className="input-group-btn"><span className="form-control textwidth">专利检索:</span></div>
                            <input type="text" className="form-control" placeholder="专利检索,请输入检索关键词例如：计算机" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">检索
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                              </span>
                        </div>
                    </div>
                    <div className="row marginRow">
                        <div className="checkboxRow">
                            <div  className="textwidth" ><input type="checkbox" aria-label="..."  />中国专利</div>
                            <div  className="textwidth" ><input type="checkbox" aria-label="..." />世界专利</div>

                        </div>
                    </div>

                    <div className="row">

                        <div className="input-group searchWidth">
                            <div className="input-group-btn "><span className="form-control textwidth">法律状态检索:</span></div>
                            <input type="text" className="form-control" placeholder="法律状态检索，请输入检索关键词例如：计算机" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">检索
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </button>
                              </span>
                        </div></div>
                </div>

            </div>
        )



    }

}

const mapStateToProps = (state, props) => {
    return {
        a: state.ArticleReducer.a,
    }
}

export default connect(mapStateToProps)(ArticlesList)