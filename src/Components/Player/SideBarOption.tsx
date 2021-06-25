import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon';
import './SideBarOption.css'

interface Props {
    title: string,
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const SideBarOption: React.FC<Props> = ({title, Icon }) => {
    return ( 
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
             {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
     );
}
 
export default SideBarOption;