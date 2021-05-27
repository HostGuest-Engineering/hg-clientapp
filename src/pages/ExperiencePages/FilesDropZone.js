import React from "react";
import PropTypes from "prop-types";
import {useDropzone} from 'react-dropzone';
import {useDispatch} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {errorHandler} from "../../redux/actions/authAction";

const FilesDropZone = ({setFieldValue,classes,errors})=>{
    const dispatch = useDispatch();
    const [files,setFiles] = React.useState([]);
    const handleDrop = React.useCallback((acceptedFiles)=>{
        if(acceptedFiles.length <= 6){
            setFieldValue('imagesOfExperience',acceptedFiles,false);
            setFiles(acceptedFiles);
        }
        else{
            dispatch(errorHandler("Please upload 6 or less images",true,'warning'));
            setFieldValue('imagesOfExperience', [], false);
            setFiles([]);
        }
    },[setFieldValue]);
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: handleDrop,
    });
    return (
        <>
            <div {...getRootProps({className: errors.imagesOfExperience ? classes.errorDropZone : classes.dropZone})}>
                <input {...getInputProps()} />
                <p className={classes.dropText}>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <Grid item>
                <Typography className={classes.textFileName} variant="h6">
                    Files Uploaded
                </Typography>
                <Grid container alignItems="flex-start" direction="column">
                    {files !== (null || undefined || []) ? 
                        files.map(file => (
                            <Typography variant="subtitle1" key={file.name}>
                                {file.name}
                            </Typography>
                        )):null
                    }
                </Grid>
            </Grid>
        </>
    )
}

FilesDropZone.propTypes ={
    setFieldValue:PropTypes.func.isRequired,
    classes:PropTypes.any.isRequired,
    errors:PropTypes.object.isRequired
}

export default FilesDropZone;
