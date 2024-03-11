export const testimonial = {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        
        {
            name:'name',
            title: 'Name',
            type: 'string'
        }
        ,
        {
            name:'Company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name:'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ],
}