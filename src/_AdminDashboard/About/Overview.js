import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContentPane from '../../Utils/ContentPane'
import { Translate } from 'react-i18nify';

export default class Overview extends Component {
    render() {
        return (
            <ContentPane itemListPaneWidth={this.props.itemListPaneWidth}>
                <h2 className="win-h2 titleContentPane">{this.props.title}</h2>
                <div className="aboutPane">
                    <Translate tag='p' value={'about.overview_STRINGS.flyve_MDM_is_a_mobile_device_management_software_that_enables_you_to_secure_and_manage_all_the_mobile_devices_of_your_business_via_a_unique_web-based_console_(MDM)'} />
                    <Translate tag='p' value={'about.overview_STRINGS.our_solution_allows_you_to_efficiently_and_easily_control_any_aspects_of_your_Android-based_mobile_fleet,_providing_a_panel_of_functionalities'} />
                    <ul>
                        <Translate tag='li' value={'about.overview_STRINGS.provided_as_sass_platform'} />
                        <Translate tag='li' value={'about.overview_STRINGS.google_indepent'} />
                        <Translate tag='li' value={'about.overview_STRINGS.deploy_and_configure_applications'} />
                        <Translate tag='li' value={'about.overview_STRINGS.deploy_files'} />
                        <Translate tag='li' value={'about.overview_STRINGS.wipe_a_phone'} />
                        <Translate tag='li' value={'about.overview_STRINGS.work_with_devices_running_Android_4,4_or_higher'} />
                        <Translate tag='li' value={'about.overview_STRINGS.simple_web_application_user_interface'} />
                    </ul>
                    <Translate tag='p' value={'about.overview_STRINGS.source_codes_will_be_released_during_fall_2016'} />
                </div>
            </ContentPane>
        )
    }
}
Overview.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    title: PropTypes.string.isRequired
}