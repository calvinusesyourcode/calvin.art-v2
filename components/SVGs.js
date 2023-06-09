import Link from "next/link"

export function SocialIcon (props) {
    var app = props.app
    var color = props.color ? props.color : 'white'
    var size = props.size ? props.size : '32'
    var link = {'twitter':'https://twitter.com/calvinducharme',
                    'github':"https://github.com/calvinusesyourcode",
                    'linkedin':"https://www.linkedin.com/in/calvinducharme/",
                    'instagram':"https://www.instagram.com/calvinducharme/",
                    'email':"mailto:calvinducharme@gmail.com",
                }[app]
    return (
        <>
        <Link id={app+"_icon"} href={link}>
        {app == 'twitter' &&
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
                <path fill={color} d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
        }
        {app == 'github' &&
            <svg width={size} height={size} aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                <path fill={color} d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
        }
        {app == "email" &&
        <svg height={size} viewBox="0 0 251 189" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke={color} stroke-width="14" stroke-linejoin="round" d="M7 7L123 105L244 7M7 7V182H244V7M7 7H244"/>
            </svg>
        }
        </Link>
        </>
    )
}

