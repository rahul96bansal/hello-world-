import React from 'react';
import CSVReader from "react-csv-reader";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CSVFileUploader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            result: []
        }
    }
    handleFiles = (files) => {
        console.log(files)
        var arr=[];
        var keys=[];
        var output=[];
        for (let i=1; i<files.length-1; i++)
        {
            arr.push(files[i][6])
        }
        this.setState({
            result: arr
        })
        console.log(arr)
        keys.push(files[0][3])
        keys.push(files[0][6])
        keys.push(files[0][7])
        keys.push(files[0][8])
        keys.push(files[0][9])
        keys.push(files[0][10])
        keys.push(files[0][15])
        console.log(keys)
        for (let i = 1; i < files.length-1; i++) {
            var obj = {};
    
            for (let k = 0; k < keys.length; k++) {
                obj[keys[k]] = files[i][k];
            }
    
            output.push(obj);
        }
        console.log(output)
    }

    getAllRows = () => {
        return this.state.result.map((item) => {
            return (<li>{JSON.stringify(item)}</li>);
        });
    }
    render() {
        return (
            <div className="container">
                <CSVReader
                    cssClass="react-csv-input"
                    onFileLoaded={this.handleFiles}
                />
                <datalist id="languages">
                  {this.state.result.map((item) => {
                      return <option  value={item} />
                  })}
                </datalist>
                <input type="text" list="languages" placeholder="  medicine name..."/>
            </div>
            
        );
    }
}

export default CSVFileUploader;