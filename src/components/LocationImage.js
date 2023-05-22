import useImage from '@/data/image';

export default function StationImage(props) {
  const { image, isLoading, isError } = useImage(props.location)
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!image) return <div>No image</div>

  return (
    <img src={image} width="325" height="325" alt={props.location.name}/>
  )
}