import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- Foodies`;
    }, [title])
}

export default useTitle;