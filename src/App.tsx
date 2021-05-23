import React from 'react';
import Dan from './danhead.png';
import Bua from './bua.png'
import Hole from './hole.png'
import Button from './button.png'
import './App.scss';

type LoveType = {
  onHole: number,
  score: number
}

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = {
      onHole: 2,
      score: 0,
      currentPress: ''
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handlePress);

    setInterval(() => {
      const RANDOM_NUMBER = Math.floor(Math.random() * 3) + 1
      this.setState({
        onHole: RANDOM_NUMBER
      })
      console.log('radom', this.state.onHole)
    }, 400)

  }
  handlePress = (e: any) => {
    let key = e.key
    this.setState({
      currentPress: key
    })
    console.log('check', this.checkScored(key))
    if (this.checkScored(key)) {
      this.setState({
        score: this.state.score + 100,
      })
    }
  }

  checkScored = (key: string): boolean => {
    let onHole: number = this.state.onHole
    if (key === 'a' || key === 'A') {
      if (onHole === 1) {
        return true
      }
    }
    if (key === 'b' || key === 'B') {
      if (onHole === 2) {
        return true
      }
    }
    if (key === 'c' || key === 'C') {
      if (onHole === 3) {
        return true
      }
    }
    return false
  }
  setScoreAnimation = () => {
    let score: any = document.querySelector('.score-d')
    score.style.fontSize = '1rem'
    console.log('sey style')
  }

  render() {
    let { score, onHole, currentPress } = this.state
    return (
      <div className="App">
        <header className="header">
        </header>
        <div className='sandap'>

          <div className='hold-wrap'>
            <div className='hold'>
              <img src={Dan} alt='Dan' className={onHole === 1 ? 'display' : ''} />
              <img src={Bua} className={currentPress === 'a' || currentPress === 'A' ? 'display-bua' : ''} />
              <img src={Hole} alt='hole' />
            </div>
            <div className='guide'>
              <img src={Button} className={currentPress === 'a' || currentPress === 'A' ? 'scale-button' : ''} />
              <span>PRESS A</span>
            </div>
          </div>


          <div className='hold-wrap'>
            <div className='hold'>
              <img src={Dan} alt='Dan' className={onHole === 2 ? 'display' : ''} />
              <img src={Bua} className={currentPress === 'b' || currentPress === 'B' ? 'display-bua' : ''} />
              <img src={Hole} alt='hole' />
            </div>
            <div className='guide'>
              <img src={Button} className={currentPress === 'b' || currentPress === 'B' ? 'scale-button' : ''} />
              <span>PRESS B</span>
            </div>
          </div>


          <div className='hold-wrap'>
            <div className='hold'>
              <img src={Dan} alt='Dan' className={onHole === 3 ? 'display' : ''} />
              <img src={Bua} className={currentPress === 'c' || currentPress === 'C' ? 'display-bua' : ''} />
              <img src={Hole} alt='hole' />
            </div>
            <div className='guide'>
              <img src={Button} className={currentPress === 'c' || currentPress === 'C' ? 'scale-button' : ''} />
              <span>PRESS C</span>
            </div>
          </div>

        </div>
        <div className='score'  >
          <span>Your score</span>
          <span className='score-d' onChange={this.setScoreAnimation}> {score}</span>
        </div>

      </div >
    );
  }
}

export default App;
