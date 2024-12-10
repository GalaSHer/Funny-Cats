import styles from "./homePageBtn.module.css"

interface HomePageBtnProps {
  handleClick?: () => void
}

export const HomePageBtn: React.FC<HomePageBtnProps> = ({ handleClick }) => {
  return (
    <button className={styles.homePageBtn} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="100%"
        height="100%"
        aria-label="Home"
      >
        <path d="M3 9.2L12 3l9 6.2v10.8c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-4H9v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V9.2z" />
      </svg>
    </button>
  )
}