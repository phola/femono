import Button from '.'

export default {
  component: Button,
  children: 'Lorem ipsum',
  props: {
    
    
    onClick: value => console.log(`Select: ${value}`)
  }
}