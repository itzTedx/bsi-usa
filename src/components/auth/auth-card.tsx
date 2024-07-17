import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
import BackButton from './back-button'
import Socials from './socials'

type CardWrapperProps = {
  children: React.ReactNode
  cardTitle: string
  backButtonHref: string
  backButtonLabel: string
  cardDesc?: string
  showSocials?: boolean
}

export default function AuthCard({
  children,
  cardTitle,
  backButtonHref,
  backButtonLabel,
  showSocials,
  cardDesc,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        {cardDesc && <CardDescription>{cardDesc}</CardDescription>}
      </CardHeader>
      <CardContent>
        {showSocials && <Socials />} <Separator className="my-5 w-80 mx-auto" />
        {children}
      </CardContent>

      <CardFooter className="">
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}
