import { useDrag } from 'react-dnd'

export const useCustomDrag = ({ index, id }) => {
    return useDrag({
        type: 'CARD',
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
}
