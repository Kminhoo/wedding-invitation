import { useEffect } from 'react'

const Maple = () => {
  useEffect(() => {
    const newMapleGenerate = () => {
      const mapleContainer = document.querySelector('.maple-container')
      const mapleBox = document.createElement('div')
      const mapleImage = document.createElement('img')
      mapleImage.src = './assets/mapleLeaf.png'
      mapleImage.style.height = '25px'
      mapleImage.style.width = '25px'
      mapleBox.appendChild(mapleImage)
      mapleBox.classList.add('maple')
      mapleBox.style.left = Math.random() * window.innerWidth + 'px'
      mapleBox.style.opacity = `${Math.random()}`

      mapleContainer?.appendChild(mapleBox)

      setTimeout(() => {
        mapleBox.remove()
      }, 300000)
    }

    const interval = setInterval(newMapleGenerate, 500)

    return () => clearInterval(interval)
  }, [])

  return <div className="maple-container"></div>
}

export default Maple

// const MapleLeaf = () => {
//   return (
//     <svg
//       width="150px"
//       height="150px"
//       viewBox="0 0 24 24"
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       className="leaf"
//     >
//       <defs></defs>
//       <path d="M22.52,7.24V9.53a5.34,5.34,0,0,1-3,4.82,4.21,4.21,0,0,1,1.11,2.83v1.54H16.2A4.19,4.19,0,0,1,12,14.89H12A4.19,4.19,0,0,1,7.8,18.72H3.39V17.18A4.21,4.21,0,0,1,4.5,14.35a5.34,5.34,0,0,1-3-4.82V7.24H6.63a4.94,4.94,0,0,1,1,.09A9.81,9.81,0,0,1,12,1.5a9.81,9.81,0,0,1,4.42,5.83,4.94,4.94,0,0,1,.95-.09Z" />
//       <line x1="12" y1="7.24" x2="12" y2="23.5" />
//       <line x1="6.26" y1="11.07" x2="12" y2="14.89" />
//       <line x1="16.78" y1="11.07" x2="12" y2="13.93" />
//     </svg>
//   )
// }
