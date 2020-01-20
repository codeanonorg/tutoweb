import { FunctionalComponent, h } from "preact";
import { Card, Container } from "preact-bulma";
import Markup from "preact-markup";
import { useEffect, useState } from "preact/hooks";
import {
  AnnounceBlock as IAnnounceBlock,
  getImage,
  Image,
  isAnnounceBlock,
  isRichTextBlock,
  RichTextBlock as IRichTextBlock,
  StreamBlock as IStreamBlock
} from "../../api";

interface Props {
  block: IStreamBlock;
}

function RichTextBlock(block: IRichTextBlock) {
  return <Container><Markup class="content has-text-justified" markup={block.value}/></Container>;
}

function AnnounceBlock(block: IAnnounceBlock) {
  const [image, setImage] = useState<Image | null>(null);
  useEffect(() => {
    getImage(block.value.image).then(setImage)
  }, [block.value.image]);
  return <Container><Card.Card>
    <Card.Header title={block.value.title}/>
    {image && (<Card.Image class="image is-1by1" src={image?.meta.downloadUrl} alt={block.value.title}/>)}
    <Card.Content><Markup class="content has-text-justified" markup={block.value.content}/></Card.Content>
  </Card.Card></Container>;
}

const StreamBlock: FunctionalComponent<Props> = props => {
  if (isRichTextBlock(props.block)) {
    return RichTextBlock(props.block);
  }
  if (isAnnounceBlock(props.block)) {
    return AnnounceBlock(props.block);
  }
  return null;
};

export default StreamBlock;

