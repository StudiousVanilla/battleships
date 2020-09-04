<template>
  <div
    class="grid" >
    <div
      id = "00"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('00')">00</div>
    <div
      id = "01"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('01')">01</div>
    <div
      id = "02"  
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('02')">02</div>
    <div  
      id = "03"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('03')">03</div>
    <div 
      id = "04" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('04')">04</div>
    <div
      id = "05"  
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('05')">05</div>
    <div
      id = "06"  
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('06')">06</div>
    <div
      id = "07"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('07')">07</div>
    <div  
      id = "08"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('08')">08</div>
    <div 
      id = "09" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('09')">09</div>
    <div
      id = "10"  
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('10')">10</div>
    <div  
      id = "11"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('11')">11</div>
    <div 
      id = "12" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('12')">12</div>
    <div 
      id = "13" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('13')">13</div>
    <div 
      id = "14" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('14')">14</div>
    <div 
      id = "15" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('15')">15</div>
    <div 
      id = "16" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('16')">16</div>
    <div  
      id = "17"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('17')">17</div>
    <div  
      id = "18"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('18')">18</div>
    <div  
      id = "19"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('19')">19</div>
    <div 
      id = "20" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('20')">20</div>
    <div
      id = "21"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('21')">21</div>
    <div  
      id = "22"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('22')">22</div>
    <div  
      id = "23"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('23')">23</div>
    <div  
      id = "24"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('24')">24</div>
    <div 
      id = "25" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('25')">25</div>
    <div 
      id = "26" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('26')">26</div>
    <div  
      id = "27"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('27')">27</div>
    <div  
      id = "38"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('28')">28</div>
    <div  
      id = "29"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('29')">29</div>
    <div  
      id = "30"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('30')">30</div>
    <div  
      id = "31"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('31')">31</div>
    <div 
      id = "32" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('32')">32</div>
    <div  
      id = "33"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('33')">33</div>
    <div  
      id = "34"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('34')">34</div>
    <div 
      id = "35" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('35')">35</div>
    <div  
      id = "36"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('36')">36</div>
    <div  
      id = "37"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('37')">37</div>
    <div  
      id = "38"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('38')">38</div>
    <div  
      id = "39"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('39')">39</div>
    <div  
      id = "40"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('40')">40</div>
    <div  
      id = "41"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('41')">41</div>
    <div  
      id = "42"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('42')">42</div>
    <div  
      id = "43"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('43')">43</div>
    <div  
      id = "44"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('44')">44</div>
    <div  
      id = "45"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('45')">45</div>
    <div  
      id = "46"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('46')">46</div>
    <div  
      id = "47"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('47')">47</div>
    <div  
      id = "48"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('48')">48</div>
    <div  
      id = "49"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('49')">49</div>
    <div  
      id = "50"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('50')">50</div>
    <div  
      id = "51"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('51')">51</div>
    <div  
      id = "52"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('52')">52</div>
    <div  
      id = "53"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('53')">53</div>
    <div  
      id = "54"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('54')">54</div>
    <div  
      id = "55"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('55')">55</div>
    <div  
      id = "56"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('56')">56</div>
    <div  
      id = "57"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('57')">57</div>
    <div  
      id = "58"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('58')">58</div>
    <div  
      id = "59"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('59')">59</div>
    <div  
      id = "60"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('60')">60</div>
    <div  
      id = "61"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('61')">61</div>
    <div  
      id = "62"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('62')">62</div>
    <div  
      id = "63"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('63')">63</div>
    <div  
      id = "64"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('64')">64</div>
    <div  
      id = "65"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('65')">65</div>
    <div  
      id = "66"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('66')">66</div>
    <div  
      id = "67"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('67')">67</div>
    <div  
      id = "68"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('68')">68</div>
    <div 
      id = "69" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('69')">69</div>
    <div 
      id = "70" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('70')">70</div>
    <div  
      id = "71"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('71')">71</div>
    <div  
      id = "72"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('72')">72</div>
    <div  
      id = "73"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('73')">73</div>
    <div  
      id = "74"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('74')">74</div>
    <div  
      id = "75"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('75')">75</div>
    <div  
      id = "76"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('76')">76</div>
    <div 
      id = "77" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('77')">77</div>
    <div  
      id = "78"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('78')">78</div>
    <div  
      id = "79"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('79')">79</div>
    <div  
      id = "80"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('80')">80</div>
    <div  
      id = "81"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('81')">81</div>
    <div  
      id = "82"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('82')">82</div>
    <div  
      id = "83"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('83')">83</div>
    <div  
      id = "84"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('84')">84</div>
    <div  
      id = "85"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('85')">85</div>
    <div  
      id = "86"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('86')">86</div>
    <div  
      id = "87"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('87')">87</div>
    <div  
      id = "88"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('88')">88</div>
    <div  
      id = "89"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('89')">89</div>
    <div  
      id = "90"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('90')">90</div>
    <div  
      id = "91"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('91')">91</div>
    <div  
      id = "92"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('92')">92</div>
    <div  
      id = "93"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('93')">93</div>
    <div  
      id = "94"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('94')">94</div>
    <div  
      id = "95"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('95')">95</div>
    <div  
      id = "96"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('96')">96</div>
    <div  
      id = "97"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('97')">97</div>
    <div  
      id = "98"
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('98')">98</div>
    <div 
      id = "99" 
      :class="{ glow: !shipPlacemenet }"
      class = "boardSquare" 
      @click="coordinateSelect('99')">99</div>
  </div>
</template>

<script>
export default {
    name: 'Board1',
    data (){
        return{
            shipPlacemenet: true,
            coordinate: ''
        }
    },
    methods: {
        coordinateSelect(coordinate){
            // eslint-disable-next-line
            this.coordinate = coordinate
            this.$emit('changeCoordinate', this.coordinate)
        }
    },
}
// wont chnage css in style tag of elemnts created? Life cycle hook maybe?
</script>

<style scoped>
.grid{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.boardSquare{
  height: 9%;
  width: 9%;
  margin: 1px;
  border: 1px solid black;
  background-color:rgb(226, 233, 238);
  text-align: center;
}

.boardSquare:hover{
    background-color: yellow;
}

.glow{
  background-color:rgb(226, 233, 238);
}

.glow:hover{
  background-color: rgb(226, 233, 238);;
}

</style>

