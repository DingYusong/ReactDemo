/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';



class ReactDemo01 extends Component {


  //这个替代了ES5的initStates
  constructor() {
		super();
    console.log('responseText');

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({})),
    }
		// 必须绑定，否则onPress报错
		// this._renderRow = this._renderRow.bind(this);
	}

  //相当于XIB文件，主要是UI布局
  render() {
    return (
      <ScrollView style={styles.flex_1}>

        <View style={[styles.header]}>
            <Text style={styles.header_title}>
              黄金钱包
            </Text>
        </View>

        <View style={styles.flex_1}>
          <Text style={styles.list_header}>
            我的黄金
          </Text>
        </View>


        <ListView
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
        />

      </ScrollView>
    );
  };

  _genRows(): Array<string> {
    return [
      {
        id:4,
        title: 'HTML5高级前端开发工程师',
        company: '极好家',
        logo: 'http://www.lagou.com/i/image/M00/02/30/CgqKkVaFYSOAAZ2OAACMUX3RVLY286.png',
        info: '上海 3-5年 不限',
        companyPosition: '天使轮',
        companyPerson: '15-50人',
        companyService: '电子商务',
        date: '02月01日',
        salary: '15k-25k',
        depositName: '移动互联网112'
      },
      {
        id:5,
        title: '移动架构师',
        company: '饿了么',
        logo: 'http://www.lagou.com/i/image/M00/01/7F/CgqKkVZuMj2ACjxNAAAQn5l0gHk231.png',
        info: '上海 3-5年 本科',
        companyPosition: 'D轮以上',
        companyPerson: '2000人以上',
        companyService: '移动互联网',
        depositName: '移动互联网111',
        date: '02月01日',
        salary: '30k-35k'
      }
    ];
  }

  _renderRow(jobData: Object, sectionID: number, rowID: number) {
    console.log("cell 测试");

    return (
      <Text style={styles.list_row}>{jobData.depositName}</Text>
    );
  }

  // <ListView
  //       dataSource={this.state.dataSource}
  //       renderRow={(rowData) => <Text style={styles.list_row}>{rowData}</Text>}
  //       />


componentDidMount(){
  this._getData();
};


//获取数据
_getData() {
  fetch('http://dev.huangjinqianbao.com:7085/server/info/getDepositInfoList', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent' : 'GoldWallet/2.3.0 (iPhone; iOS 9.2; Scale/2.00)',
      'blackBox' : 'ewogICJ0b2tlbklkIiA6ICJoanFiODYxZWQyNWEzYjE3MjU1NzhhNzI0ZjViMTg2YWVkZTMiLAogICJvcyIgOiAiaU9TIiwKICAicHJvZmlsZVRpbWUiIDogMTU2MCwKICAidmVyc2lvbiIgOiAiMi4wLjIiCn0=',
      'channel' : 'appStore',
      'deviceId' : 'C2F2807D-598F-4889-A19B-11BFDA077906',
      'jgPushId' : '',
      'manufacture' : 'Apple',
      'mobileModel' : "iPhone Simulator",
      'netModel' : 'wifi',
      'osVersion' : "9.2",
      'platform' : 'Phone',
      'scene' : 'iOS',
      'sessionId' : "",
      'userAgent' : "Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13C75",
      'version' : "2.3.0",
      'ymPushId' : "",
    },
    body: JSON.stringify({
    })
  }).then((response) => response.text())
  .then((responseText) => {
    console.log(responseText);

    var rdata = JSON.parse(responseText);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    // 怎么样进行json数据解析

    this.setState({
      dataSource: ds.cloneWithRows(rdata.data.depositList),
      show: true
    });

    //dataSource: ds.cloneWithRows(books),
  })
  .catch((error) => {
    console.warn(error);
  });



}



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  list_header:{
    paddingLeft:15,
    backgroundColor:'#9f9f9f',
    marginTop:0,
  },

  list_row:{
    paddingLeft:15,
    backgroundColor:'#ffffff',
    marginTop:5,
    height:45,
    textAlign:'center',
  },

  flex_1:{
    flex:1,
    marginTop:0,
    backgroundColor:'#f5f5f5'
  },
  search:{
    paddingLeft:5,
    paddingRight:5,
    height:45,
  },
  btn:{
    width:50,
    backgroundColor:'#0091FF',
    justifyContent:'center',
    alignItems:'center',
  },
  fontFFF:{
    color:'#fff'
  },
  row:{
    flexDirection:'row'
  },

  header:{
    backgroundColor:'#FFA210',
    height:64,
    marginTop:0,
    justifyContent: 'center',//居中
    alignItems: 'center',
  },

  header_title:{
    marginTop : 120,
    backgroundColor:'#FFA210',
    textAlign:'center',
    fontSize:22,
    color:'#ffffff'
  }

});

AppRegistry.registerComponent('ReactDemo01', () => ReactDemo01);
