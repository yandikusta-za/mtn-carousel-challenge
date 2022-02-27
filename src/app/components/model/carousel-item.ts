export class CarouselItem {
    title: string = '';
    imageUrl: string = '';
    clickUrl: string = '';
    subActionLink?: CarouselItemLink;
    cssClass?: string = '';
    ngStyleObject?:any;
    
}

export class CarouselItemLink
{
    url: string = '';
    title: string = '';
    iconName: string = '';
}