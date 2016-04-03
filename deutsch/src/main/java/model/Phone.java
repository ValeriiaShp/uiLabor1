package model;

import java.io.Serializable;

public class Phone implements Serializable {

    private long phoneId;
    private String title;
    private byte guarantee_time;
    private String description;

    public long getPhoneId() {
        return phoneId;
    }

    public void setPhoneId(long phoneId) {
        this.phoneId = phoneId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte getGuarantee_time() {
        return guarantee_time;
    }

    public void setGuarantee_time(byte guarantee_time) {
        this.guarantee_time = guarantee_time;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Phone: id=" + phoneId + " title=" + title + " guarantee_time=" + guarantee_time + " description=" + description;
    }
}
